import { Icon } from "@iconify/react";
import PropTypes from "prop-types";
import { useMemo } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({
  memoizedNavLinks,
  memoizedAvatar,
  togglePassword,
  setTogglePassword,
}) => {
  const toggled = useMemo(() => {
    return togglePassword ? "fixed" : "hidden";
  }, [togglePassword]);

  return (
    <ul
      className={`${toggled} left-0 right-0 bottom-0 top-0 list-none 
      p-0 m-0 grid grid-cols-[1fr] content-start bg-slate-900 md:hidden overflow-hidden`}
    >
      <div className=" flex items-center justify-end    h-[60px]">
        <button
          type="button"
          onClick={() => setTogglePassword(false)}
          className="px-2.5"
        >
          <Icon
            icon="material-symbols:close"
            className="w-8 h-8 mx-2 text-white"
          />
        </button>
      </div>
      <div
        className={`${memoizedAvatar} items-center  h-[60px]`}
      >
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
            className="flex items-center border border-slate-800 h-[60px] md:hidden"
            key={idx}
          >
            <NavLink to="#" className=" px-2 py-0 no-underline text-white">
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
  setTogglePassword: PropTypes.func,
  memoizedAvatar: PropTypes.string,
};
