import Sidebar from "../Sidebar/Sidebar";
import Chat from "../Chat/Chat";

export function Main() {
  return (
    <div className="bg-white grid grid-cols-[auto_1fr]">
      <Sidebar />
      <Chat />
    </div>
  );
}
