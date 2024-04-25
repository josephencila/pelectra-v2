import { useMemo, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import pelectralogo from "../../assets/pelectra-logo.svg";
import Sidebar from "./Sidebar";
const Menubar = () => {
  const { isAuth } = useAuth();
  
  const [togglePassword, setTogglePassword] = useState(false);

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
        path: "index",
      },
      {
        name: "TRACKER",
        path: "/tracker",
      },
    ];

    return isAuth ? privateLinks : publicLinks;
  }, [isAuth]);
  
  

  const memoizedAvatar = useMemo(()=>{
    return isAuth ? 'flex' : 'hidden'
  },[isAuth])

  return (
    <nav className="w-full h-[60px] z-10 bg-white ">
      <ul className="h-full w-full list-none p-0 m-0 grid grid-cols-[repeat(2,1fr)] grid-rows-[1fr] ">
        <li className="flex items-center">
          <NavLink
            to="#"
            className="flex items-center gap-1 px-2.5 py-0 no-underline"
          >
            <img src={pelectralogo} alt="pelectra-logo" className="w-9 h-9" />
            <span className="font-bold">PELECTRA</span>
          </NavLink>
        </li>

        <li className=" grid grid-flow-col justify-end px-2 py-0">
          {memoizedNavLinks.map((link, idx) => {
            return (
              <div className="hidden md:flex md:items-center" key={idx}>
                <NavLink to="#" className="px-2 py-0 no-underline">
                  {link.name}
                </NavLink>
              </div>
            );
          })}
         <div className={`hidden md:${memoizedAvatar} items-center`}>
         <hr className={`self-center h-10 w-.5 md:border md:border-gray-200`} />
            <NavLink
              to="#"
              className="flex items-center gap-1  px-2.5 py-0 no-underline"
            >
              <div className="bg-purple-500 w-8 h-8 rounded-full"></div>
            </NavLink>
          </div>
          <div className="flex items-center  md:hidden ">
            <button type="button" onClick={() => setTogglePassword(true)}>
              <Icon icon="material-symbols:menu" className="w-8 h-8 mx-2" />
            </button>
          </div>
        </li>
      </ul>
      <Sidebar
        memoizedNavLinks={memoizedNavLinks}
        memoizedAvatar={memoizedAvatar}
        togglePassword={togglePassword}
        setTogglePassword={setTogglePassword}
      />
    </nav>
  );
};

export default Menubar;
