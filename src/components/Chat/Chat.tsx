import Input from "../../elements/Input/Input";
import MessageList from "../MessageList/MessageList";
import { useState } from "react";

type ChatBlock = {
  type: "query" | "response";
  text: string;
};

export default function Chat() {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [chatBlocks, setChatBlocks] = useState<ChatBlock[]>([]);

  const handleSetQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!query) {
      setError("Please enter a question");
    }

    try {
      const res = await fetch("http://localhost:8080/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: query }),
        credentials: "include",
      });

      setChatBlocks((prevVal) => [
        ...prevVal,
        {
          type: "query",
          text: query,
        },
        {
          type: "response",
          text: "",
        },
      ]);

      const reader = res.body?.getReader();
      const decoder = new TextDecoder();

      if (reader) {
        while (true) {
          const { value, done } = await reader.read();
          if (done) break;
          let text = decoder.decode(value, { stream: true });
          text = text.replace(/"/gm, "");
          setChatBlocks((prev) => [
            ...prev.slice(0, prev.length - 1),
            { text: prev[prev.length - 1].text + text, type: "response" },
          ]);
        }
      }

      setQuery("");
    } catch (e) {
      console.error("Error", e);
      setError("Something went wrong");
    }
  };

  return (
    <main className="grid grid-rows-[1fr_auto]">
      <div className="bg-slate-50 py-5 px-7">
        <MessageList chatBlocks={chatBlocks} />
      </div>
      <form className="py-5 px-7" onSubmit={handleSubmit}>
        <Input
          value={query}
          onChange={handleSetQuery}
          label=""
          name="llm-input"
          type="text"
          error={error}
        />
      </form>
    </main>
  );
}
