import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
const SignInForm = () => {
  return (
    <form className="h-auto w-full max-w-md  grid grid-cols-1 content-start 
     gap-5 p-5  rounded-md shadow-sm  bg-white ">
       <div className=" flex flex-col">
          <span className="font-bold">Sign In</span>
          <small>Enter your registered account.</small>
       </div>
      <div className="flex  flex-col gap-1">
        <label htmlFor="email">Email </label>
        <input
          type="email"
          name="email"
          placeholder="example@email.com"
          className="p-2 rounded-md outline-none border border-slate-400"
        />
        <small className="text-red-500">Email is required field.</small>
      </div>

      <div className="flex  flex-col gap-1">
        <div className="flex justify-between">
          <label htmlFor="password"> Password </label>
          <NavLink className="text-sm hover:underline">
            Forgot Password?
          </NavLink>
        </div>
        <div className="relative grid grid-cols-[1fr_50px]   border border-slate-400  rounded-md  bg-white">
          <input
            type="password"
            name="password"
            placeholder="••••••••••••"
            className="p-2 outline-none w-full rounded-md"
          />
          <button
            type="button"
            className=" flex justify-center items-center  rounded-md"
          >
            <Icon icon="mdi:eye-outline" className="w-5 h-5 " />
          </button>
        </div>
        <small className="text-red-500">Email is required field.</small>
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
          <NavLink className="hover:underline">Sign Up</NavLink>
        </small>
      </div>
      
    </form>
  );
};

export default SignInForm;
