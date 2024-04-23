import { Outlet } from "react-router-dom";
import Menubar from "./components/navigation/Menubar";

const Layout = () => {
  return (
    <div className="grid grid-cols-[1fr] grid-rows-[60px_1fr] h-full w-full">
      <Menubar />
      <Outlet />
    </div>
  );
};

export default Layout;
