import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const SignInForm = () => {
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

  const signInSchema = z.object({
    email: z
      .string()
      .min(1, { message: "Email is a required field." })
      .email("Email must be a valid email address."),
    password: z.string().min(1, { message: "Password is a required field." }),
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    let blockEmoji = /^[a-zA-Z\s&\d&$&+,:;=?@#|'<>.^*()%!-]*$/
    let val = value;

     if(!blockEmoji.test(value)){
      return
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
    resolver: zodResolver(signInSchema),
    mode: "onChange",
  });

  const onSubmit = () => {
    // signIn(user.email, user.password);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="h-auto w-full max-w-md  grid grid-cols-1 content-start 
     gap-5 p-5  rounded-md shadow-sm  bg-white "
    >
      <div className=" flex flex-col">
        <span className="font-bold">Sign In</span>
        <small>Enter your registered account.</small>
      </div>
      <div className="flex  flex-col gap-1">
        <label htmlFor="email">Email </label>
        <input
          type="text"
          name="email"
          placeholder="example@email.com"
          className="p-2 rounded-md outline-none border border-slate-400"
          value={user.email}
          onChange={onChange}
          autoComplete="off"
          {...register("email", {
            onChange: onChange,
          })}
        />
        <small className="text-red-500">{errors.email?.message}</small>
      </div>

      <div className="flex  flex-col gap-1">
        <div className="flex justify-between">
          <label htmlFor="password"> Password </label>
          <NavLink className="hidden text-sm hover:underline">
            Forgot Password?
          </NavLink>
        </div>
        <div className="relative grid grid-cols-[1fr_50px]   border border-slate-400  rounded-md  bg-white">
          <input
            type={memoizeToggle[0]}
            name="password"
            placeholder="••••••••••••"
            value={user.password}
            className="p-2 outline-none w-full rounded-md"
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

      <div className="flex flex-col gap-1 justify-center items-center">
        <button
          type="submit"
          className="w-full p-2 rounded-md text-white bg-purple-600 hover:bg-purple-700"
        >
          Sign In
        </button>
        <small className="flex flex-row gap-1">
          Don&apos;t have an account?
          <NavLink to="/sign-up" className="hover:underline">Sign Up</NavLink>
        </small>
      </div>
    </form>
  );
};

export default SignInForm;
