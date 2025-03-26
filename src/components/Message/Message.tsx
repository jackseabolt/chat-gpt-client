import { ChatBlock } from "../../types/chat.types";

export default function Message({ message }: { message: ChatBlock }) {
  return (
    <section className="whitespace-pre-line block bg-white rounded py-5 px-7 mb-7 border-stone-300 border-1 text-stone-700">
      <p>{message.createdAt}</p>
      <p>{message.text}</p>
    </section>
  );
}
