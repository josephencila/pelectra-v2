import { useMemo, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import pelectralogo from "../../assets/pelectra-logo.svg";
import Sidebar from "./Sidebar";
import UserDropdown from "./UserDropdown";

const Menubar = () => {
  // const { isAuth } = useAuth();
  const isAuth = true;
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [toggleUserDropdown, setToggleUserDropdown] = useState(false);
  const memoizedNavLinks = useMemo(() => {
    const publicLinks = [
      {
        name: "Sign In",
        path: "/sign-in",
      },
      {
        name: "Sign Up",
        path: "/sign-up",
      },
    ];

    const privateLinks = [
      {
        name: "HOME",
        path: "/",
      },
      {
        name: "TRACKER",
        path: "/tracker",
      },
    ];

    return isAuth ? privateLinks : publicLinks;
  }, [isAuth]);

  const memoizedAvatar = useMemo(() => {
    return isAuth ? "flex" : "hidden";
  }, [isAuth]);

  const memoizedUserDropdown = useMemo(() => {
    return toggleUserDropdown ? "flex" : "hidden";
  }, [toggleUserDropdown]);

  return (
    <nav className="flex justify-center w-full h-[60px] z-10 bg-slate-900 ">
      <ul className="h-full w-full max-w-5xl list-none p-0 m-0 grid grid-cols-[repeat(2,1fr)] grid-rows-[1fr] ">
        <li className="flex items-center">
          <NavLink
            to="/"
            className="flex items-center gap-1 px-2.5 py-0 no-underline"
          >
            <img src={pelectralogo} alt="pelectra-logo" className="w-9 h-9" />
            <span className="font-bold text-white">PELECTRA</span>
          </NavLink>
        </li>

        <li className=" grid grid-flow-col justify-end px-2 py-0">
          {memoizedNavLinks.map((link, idx) => {
            return (
              <div className="hidden md:flex md:items-center" key={idx}>
                <NavLink
                  to={link.path}
                  className="px-2 py-0 no-underline text-white"
                >
                  {link.name}
                </NavLink>
              </div>
            );
          })}
          <div className={`hidden md:${memoizedAvatar} relative items-center`}>
            <hr
              className={`self-center h-10 w-.5 md:border md:border-slate-600`}
            />
            <button
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget))
                  setToggleUserDropdown(false);
              }}
              type="button"
              onClick={() => setToggleUserDropdown(!toggleUserDropdown)}
              className="flex items-center gap-1  px-2.5 py-0 no-underline"
            >
              <div className="bg-purple-500 w-8 h-8 rounded-full"></div>
            </button>
            <UserDropdown
              memoizedUserDropdown={memoizedUserDropdown}
              setToggleUserDropdown={setToggleUserDropdown}
            />
          </div>

          <div className="flex items-center  md:hidden ">
            <button type="button" onClick={() => setToggleSidebar(true)}>
              <Icon
                icon="material-symbols:menu"
                className="w-8 h-8 mx-2 text-white"
              />
            </button>
          </div>
        </li>
      </ul>
      <Sidebar
        memoizedNavLinks={memoizedNavLinks}
        memoizedAvatar={memoizedAvatar}
        toggleSidebar={toggleSidebar}
        setToggleSidebar={setToggleSidebar}
      />
    </nav>
  );
};

export default Menubar;
