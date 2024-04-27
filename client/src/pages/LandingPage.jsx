import { useMemo } from "react";
import Welcome from "../components/home/Welcome";

const LandingPage = () => {
  const isAuth = false;

  const memoizedLandingPage = useMemo(() => {
    return isAuth ? <div>Dashboard</div> : <Welcome />;
  }, [isAuth]);

  return memoizedLandingPage;
};

export default LandingPage;
