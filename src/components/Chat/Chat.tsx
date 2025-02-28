import Input from "../../elements/Input/Input";
import { submitChat } from "../../api/chatApi";
import { useState } from "react";

export default function Chat() {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  const handleSetQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!query) {
      setError("Please enter a question");
    }

    try {
      submitChat({ query });
    } catch (e) {
      console.error("Error", e);
      setError("Something went wrong");
    }
  };

  return (
    <main className="grid grid-rows-[1fr_auto]">
      <div className="bg-slate-50"></div>
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
