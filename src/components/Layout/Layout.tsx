import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="grid h-screen w-screen grid-rows-[auto_1fr]">
      <header className="bg-white-500 py-5 px-7 border-b-1 border-stone-300">
        My Smarty Chat
      </header>

      <Outlet />
    </div>
  );
}
