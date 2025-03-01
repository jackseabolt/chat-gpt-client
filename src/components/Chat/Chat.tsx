import Input from "../../elements/Input/Input";
import { useState } from "react";

export default function Chat() {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [response, setResponse] = useState("");

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
      });

      const reader = res.body?.getReader();
      const decoder = new TextDecoder();

      if (reader) {
        while (true) {
          const { value, done } = await reader.read();
          if (done) break;
          let text = decoder.decode(value, { stream: true });
          text = text.replace(/"/gm, "");
          setResponse((prev) => prev + text);
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
        <p className="whitespace-pre-line">{response}</p>
      </div>
      <form className="py-5 px-7" onSubmit={handleSubmit}>
        <Input
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
