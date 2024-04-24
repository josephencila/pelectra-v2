import { Icon } from "@iconify/react/dist/iconify.js";
import PropTypes from "prop-types";
import { useMemo } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ memoizedNavLinks, togglePassword }) => {
  const toggled = useMemo(() => {
    return togglePassword ? "fixed" : "hidden";
  }, [togglePassword]);

  return (
    <ul
      className={`fixed left-0 right-0 bottom-0 top-0 list-none 
      p-0 m-0  grid grid-cols-[1fr] content-start   bg-purple-400 md:hidden overflow-hidden`}
    >
      <div className=" flex items-center  border border-solid  h-[60px]">
        <button type="button">
          <Icon icon="material-symbols:menu" className="w-8 h-8 mx-2" />
        </button>
      </div>
      <div className="flex items-center  border border-solid h-[60px]">
        <NavLink
          to="#"
          className="flex items-center gap-1  px-2.5 py-0 no-underline"
        >
          <div className="bg-purple-500 w-8 h-8 rounded-full"></div>
        </NavLink>
      </div>
      {memoizedNavLinks.map((link, idx) => {
        return (
          <div
            className="flex items-center border border-solid h-[60px] md:hidden"
            key={idx}
          >
            <NavLink to="#" className=" px-2 py-0 no-underline">
              {link.name}
            </NavLink>
          </div>
        );
      })}
    </ul>
  );
};

export default Sidebar;
Sidebar.propTypes = {
  memoizedNavLinks: PropTypes.array,
  togglePassword: PropTypes.bool,
};
