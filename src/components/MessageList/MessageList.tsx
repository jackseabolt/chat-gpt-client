import { ChatBlock } from "../../types/chat.types";
import Message from "../Message/Message";

export default function MessageList({
  chatBlocks,
}: {
  chatBlocks: ChatBlock[];
}) {
  return (
    <div className="bg-slate-50 py-5 px-7">
      {chatBlocks.map((message, i) => (
        <Message message={message} key={message.text + i} />
      ))}
    </div>
  );
}
