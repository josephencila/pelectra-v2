import PropTypes from "prop-types";
const UserDropdown = ({ memoizedUserDropdown,setToggleUserDropdown }) => {
  return (
    <ul
      onBlur={(e)=>{
       if(!e.currentTarget.contains(e.relatedTarget))
       setToggleUserDropdown(false)
      }}
      
      className={`absolute ${memoizedUserDropdown}  flex-col justify-center top-14 right-0 bg-slate-800 list-none p-2.5  m-0 border border-slate-700 rounded-md w-44 h-auto`}
    >
      <li>
        <button type="button" className="text-white">
          example@gmail.com
        </button>
      </li>
      <li>
        <button type="button" className="text-white">
          Sign Out
        </button>
      </li>
    </ul>
  );
};

export default UserDropdown;

UserDropdown.propTypes = {
  memoizedUserDropdown: PropTypes.string,
  setToggleUserDropdown: PropTypes.func
};
