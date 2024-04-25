import { Icon } from "@iconify/react";
import { usePasswordValidation } from "../../hooks/usePasswordValidation";
import { useMemo } from "react";

const PasswordValidationCard = () => {
  const { errorType } = usePasswordValidation();

  const customMessage = [
    "1 Lowercase Letter",
    "1 Uppercase Letter",
    "1 Number",
    "1 Special Character (e.g. !?<>@#$%)",
    "12 Characters or more",
  ];


  const memoizedIconStatus = useMemo(() => {
    const isValid = ["text-green-500", "bx:check-circle"];
    const inValid = ["text-slate-500", "bx:circle"];

    return (stats) => (stats ? isValid : inValid);
  }, []);

  return (
    <div className="flex flex-col">
      <ul className="flex flex-col list-none p-1 m-0">
        {Object.values(errorType).map((status, idx) => {
          return (
            <li
              className={`flex flex-row items-center gap-2 ${
                memoizedIconStatus(status)[0]
              }`}
              key={idx}
            >
              <Icon icon={memoizedIconStatus(status)[1]} className="w-4 h-4" />
              <span>{customMessage[idx]}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PasswordValidationCard;
