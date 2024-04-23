import { useMemo } from "react";

const LandingPage = () => {
  const isAuth = false;

  const memoizedLandingPage = useMemo(() => {
    return isAuth ? <div>Dashboard</div> : <div>Welcome</div>;
  }, [isAuth]);

  return memoizedLandingPage;
};

export default LandingPage;
