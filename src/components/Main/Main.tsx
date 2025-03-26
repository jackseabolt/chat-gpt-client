import Sidebar from "../Sidebar/Sidebar";
import Chat from "../Chat/Chat";

export function Main() {
  return (
    <div className="bg-white grid md:grid-cols-[auto_1fr] overflow-y-auto">
      <Sidebar />
      <Chat />
    </div>
  );
}
