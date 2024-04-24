import { useMemo } from "react";

const LandingPage = () => {
  const isAuth = false;

  const memoizedLandingPage = useMemo(() => {
    return isAuth ? <div>Dashboard</div> : <div className="bg-sky-50 h-dvh-60 md:bg-pink-400">Welcome</div>;
  }, [isAuth]);

  return memoizedLandingPage;
};

export default LandingPage;
