import { useMemo } from "react";
import useAuth from "../../hooks/useAuth";

const Menubar = () => {
  const { isAuth } = useAuth();

  const memoizedNavLinks = useMemo(() => {
    const publicLinks = [
      {
        name: "Home",
        path: "/",
      },
      {
        name: "Profile",
        path: "/profile",
      },
      {
        name: "Employer",
        path: "/employer",
      },
      {
        name: "Sign Out",
        path: "#",
      },
    ];

    const privateLinks = [
      {
        name: "Sign In",
        path: "/sign-in",
      },
      {
        name: "Sign Up",
        path: "/sign-up",
      },
    ];

    return isAuth ? privateLinks : publicLinks;
  }, [isAuth]);

  return <div className="w-full h-[60px] z-10 b-blue border border-solid">
    
  </div>;
};

export default Menubar;
