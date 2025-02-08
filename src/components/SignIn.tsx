import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div className=" px-10">
      <Link to={"/"} className="flex items-center gap-2 py-10  text-black">
        <Icon icon="mi:home" className="text-lg" />
        Back to Home
      </Link>
      <div className="flex items-center justify-center h-[70vh]">
        <div className="bg-[#f9f9f9ea] p-8 rounded-xl shadow-lg w-[24rem]">
          <h2 className="text-2xl font-semibold text-center text-[#1d0800fd] mb-6">
            Sign In
          </h2>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 border rounded outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border rounded outline-none"
            />
            <button
              type="submit"
              className="w-full bg-[#1d0800fd] text-white py-2 rounded cursor-pointer"
            >
              Sign In
            </button>
          </form>
          <div className="flex items-center my-4">
            <div className="flex-grow border-t"></div>
            <span className="mx-2 text-gray-500">or</span>
            <div className="flex-grow border-t"></div>
          </div>
          <div className="w-full flex items-center gap-3 justify-center border py-2 rounded">
            <span className="text-xl">
              {" "}
              <Icon icon="flat-color-icons:google" />
            </span>{" "}
            <p>Sign in with Google</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
