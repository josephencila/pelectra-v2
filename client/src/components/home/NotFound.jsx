import HeroMessage from "../hero/HeroMessage";

const NotFound = () => {
  const mainMessage = "404 PAGE NOT FOUND";
  const subMessage =
    "The page you are looking for doesn't exist or another error occured.";
  const navLink = "<- Go back";
  const linkPath = "/";

  return (
    <div className="bg-slate-900 h-dvh-60">
      <HeroMessage
        mainMessage={mainMessage}
        subMessage={subMessage}
        navLink={navLink}
        linkPath={linkPath}
      />
    </div>
  );
};

export default NotFound;
