import { twMerge } from "tailwind-merge";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import { ChatBlock } from "../../types/chat.types";

export default function Message({ message }: { message: ChatBlock }) {
  const messageTypeStyles =
    message.type === "query"
      ? "ml-[45%] md:ml-[15%] lg:ml-[30%] bg-blue-100 hover:bg-blue-200 cursor-pointer"
      : "mr-[45%] md:mr-[15%] lg:mr-[30%] bg-purple-100 hover:bg-purple-200 cursor-pointer";

  const cleanText = message.text.replace(/\\n/g, "\n");

  return (
    <section
      aria-label="message"
      className={twMerge(
        messageTypeStyles,
        "block rounded-md py-5 px-7 mb-7 border-stone-300 border-1 text-stone-700 transition-colors"
      )}
    >
      <p className="text-gray-500 text-sm mb-2">{message.createdAt}</p>
      <div className="prose prose-sm whitespace-pre-wrap break-words">
        <ReactMarkdown remarkPlugins={[remarkBreaks]}>
          {cleanText}
        </ReactMarkdown>
      </div>
    </section>
  );
}
