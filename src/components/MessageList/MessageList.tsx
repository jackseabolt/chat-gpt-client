type ChatBlock = {
  type: "query" | "response";
  text: string;
};
export default function MessageList({
  chatBlocks,
}: {
  chatBlocks: ChatBlock[];
}) {
  return (
    <div className="bg-slate-50 py-5 px-7">
      {chatBlocks.map((chatBlock, i) => (
        <div
          key={i}
          className="whitespace-pre-line block bg-white rounded py-5 px-7 mb-7 border-stone-300 border-1 text-stone-700"
        >
          {chatBlock.text}
        </div>
      ))}
    </div>
  );
}
