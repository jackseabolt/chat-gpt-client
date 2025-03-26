import Sidebar from "../Sidebar/Sidebar";
import Chat from "../Chat/Chat";

export function Main() {
  return (
    <div className="bg-white flex flex-row overflow-y-auto">
      <Sidebar />
      <Chat />
    </div>
  );
}
