import { Icon } from "@iconify/react";
import PropTypes from "prop-types";
import { useMemo } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = ({
  memoizedNavLinks,
  memoizedAvatar,
  toggleSidebar,
  setToggleSidebar,
}) => {
  const navigate = useNavigate()
  const toggled = useMemo(() => {
    return toggleSidebar ? "fixed" : "hidden";
  }, [toggleSidebar]);

  const handleToggleSibar = (path) => {
    setToggleSidebar(false)
    navigate(path)
  };

  return (
    <ul
      className={`${toggled} left-0 right-0 bottom-0 top-0 list-none 
      p-0 m-0 grid grid-cols-[1fr] content-start bg-slate-900 md:hidden overflow-hidden`}
    >
      <div className=" flex items-center justify-end    h-[60px]">
        <button
          type="button"
          onClick={() => setToggleSidebar(false)}
          className="px-2.5"
        >
          <Icon
            icon="material-symbols:close"
            className="w-8 h-8 mx-2 text-white"
          />
        </button>
      </div>
      <div className={`${memoizedAvatar}  items-center  h-[60px]`}>
        <button 
          type="button"
          className="flex items-center gap-1  px-2.5 py-0 no-underline"
        >
          <div className="bg-purple-500 w-8 h-8 rounded-full"></div>
        </button>
      </div>
      {memoizedNavLinks.map((link, idx) => {
        return (
          <div
            className="flex items-center border border-slate-800 h-[60px] md:hidden"
            key={idx}
          >
            <button
              type="button"
              onClick={() => handleToggleSibar(link.path)}
              className=" px-2 py-0 no-underline text-white"
            >
              {link.name}
            </button>
          </div>
        );
      })}
    </ul>
  );
};

export default Sidebar;
Sidebar.propTypes = {
  memoizedNavLinks: PropTypes.array,
  toggleSidebar: PropTypes.bool,
  setToggleSidebar: PropTypes.func,
  memoizedAvatar: PropTypes.string,
};
