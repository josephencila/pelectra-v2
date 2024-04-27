import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
const HeroMessage = ({ mainMessage, subMessage, navLink, linkPath }) => {
  return (
    <div className="h-full w-full  flex flex-col justify-start items-center pt-20 gap-8 p-2.5 ">
      <h1 className="text-white leading-tight text-clamp-1 text-center w-full max-w-5xl ">
        {mainMessage}
      </h1>
      <p className="text-white text-center w-full max-w-xl p-2.5">{subMessage}</p>
      <NavLink
        to={linkPath}
        className="text-white bg-purple-600 rounded-md hover:bg-purple-500 px-5 py-3"
      >
        {navLink}
      </NavLink>
    </div>
  );
};

export default HeroMessage;

HeroMessage.propTypes = {
  mainMessage: PropTypes.string,
  subMessage: PropTypes.string,
  navLink: PropTypes.string,
  linkPath: PropTypes.string,
};
