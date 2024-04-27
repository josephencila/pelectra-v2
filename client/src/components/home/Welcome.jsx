import HeroMessage from "../hero/HeroMessage";

const Welcome = () => {

  const mainMessage =
    "TRACKING ELECTRIC EXPENSES WHILE ENSURING FAMILY'S WELFARE.";
  const subMessage =
    "We aim to offer a freely accessible electric bill expense tracking app via desktop or mobile devices.";
  const navLink = "Get started";
  const linkPath = "/sign-up";

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

export default Welcome;
