import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import PasswordValidationCard from "../card/PasswordValidationCard";
import { usePasswordValidation } from "../../hooks/usePasswordValidation";

const SignUpForm = () => {
  const { handleErrorType, errorMessage, multiRegex } = usePasswordValidation();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [togglePassword, setTogglePassword] = useState(false);

  const memoizeToggle = useMemo(() => {
    const open = ["text", "mdi:eye-off-outline"];
    const close = ["password", "mdi:eye-outline"];
    return togglePassword ? open : close;
  }, [togglePassword]);

  const signUpForm = z.object({
    email: z
      .string()
      .min(1, { message: "Email is a required field" })
      .email("Email must be a valid email address"),
    password: z
      .string()
      .min(1, { message: "Password is a required field" })
      .max(50,{message: 'Password maximum character is 50.'})
      .superRefine((value, ctx) => {
        multiRegex().map((rgx, idx) => {
          if (!rgx.test(value)) {
            handleErrorType(idx, false);
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: errorMessage[idx],
            });
          } else {
            handleErrorType(idx, true);
          }
        });
      }),
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    let blockEmoji = /^[a-zA-Z\s&\d&$&+,:;=?@#|'<>.^*()%!-]*$/;
    let val = value;

    if (!blockEmoji.test(value)) {
      return;
    }

    val = val.replace(" ", "");

    setUser((prevState) => ({
      ...prevState,
      [name]: val,
    }));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpForm),
    mode: "onChange",
  });

  const onSubmit = () => {
    // signIn(user.email, user.password);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="h-auto w-full max-w-md  grid grid-cols-1 content-start 
     gap-5 p-5  rounded-md shadow-sm  text-white bg-slate-800 "
    >
      <div className=" flex flex-col">
        <span className="font-bold">Sign Up</span>
        <small>Create a new account.</small>
      </div>
      <div className="flex  flex-col gap-1">
        <label htmlFor="email">Email </label>
        <input
          type="text"
          name="email"
          placeholder="example@email.com"
          className="p-2 rounded-md outline-none bg-slate-700 text-white"
          value={user.email}
          onChange={onChange}
          autoComplete="off"
          {...register("email", {
            onChange: onChange,
          })}
        />
        <small className="text-red-500">{errors.email?.message}</small>
      </div>

      <div className="flex   flex-col gap-1 ">
        <div className="flex justify-between">
          <label htmlFor="password"> Password </label>
          <NavLink className="hidden text-sm hover:underline">
            Forgot Password?
          </NavLink>
        </div>
        <div className="relative grid grid-cols-[1fr_50px]   bg-slate-700 text-white  rounded-md  ">
          <input
            type={memoizeToggle[0]}
            name="password"
            placeholder="••••••••••••"
            value={user.password}
            className="bg-slate-700 text-white p-2 outline-none w-full rounded-md"
            autoComplete="off"
            onChange={onChange}
            {...register("password", {
              onChange: onChange,
            })}
          />
          <button
            onClick={() => setTogglePassword(!togglePassword)}
            type="button"
            className=" flex justify-center items-center  rounded-md"
          >
            <Icon icon={memoizeToggle[1]} className="w-5 h-5 " />
          </button>
        </div>
        <small className="text-red-500">{errors.password?.message}</small>
      </div>
      <PasswordValidationCard />
      <div className="flex flex-col gap-4 justify-center items-center">
        <button
          type="submit"
          className="w-full p-2 rounded-md text-white bg-purple-600 hover:bg-purple-700"
        >
          Sign Up
        </button>
        <small className="flex flex-row gap-1">
          Already have an account?
          <NavLink to="/sign-in" className="hover:underline">
            Sign In
          </NavLink>
        </small>
      </div>
    </form>
  );
};

export default SignUpForm;
