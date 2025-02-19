import { Icon } from "@iconify/react/dist/iconify.js";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../firebase";

const SignIn = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  // Function to handle signing In
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Sign in Successful");
      navigate("/login");
    } catch (err) {
      // setError("Error, Signing up. please try again later.");
      toast.error("Error signing in");
    }
  };

  // function for handling google auth
  const handleGoogleSignin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      toast.success("Sign in Successful");
      navigate("/todo");
    } catch (err) {
      toast.error("Error signing in");
    }
  };

  return (
    <div className="lg:px-10 px-4 lg:py-0 py-5">
      <Link
        to={"/"}
        className="flex items-center gap-2 lg:py-10 py-8  text-black max-w-[10rem]"
      >
        <Icon icon="mi:home" className="lg:text-base text-[15.8px]" />
        Back to Home
      </Link>
      <div className="flex items-center justify-center lg:h-[70vh] h-screen">
        <div className="bg-[#f9f9f9ea] p-8 rounded-xl shadow-lg w-[24rem]">
          <h2 className="text-2xl font-bold text-center text-[#1d0800fd] mb-6">
            Sign in <span className="text-base">👋</span>
          </h2>
          <form className="space-y-6" onSubmit={handleSignUp}>
            <input
              type="text"
              placeholder="Enter your name.."
              className="w-full p-2 border rounded outline-none text-sm lg:text-[15.8px]"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Example@gmail.com"
              className="w-full p-2 border rounded outline-none text-sm lg:text-[15.8px]"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-2 border rounded outline-none text-sm lg:text-[15.8px]"
              onChange={(e) => setPassword(e.target.value)}
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
          <button
            type="button"
            onClick={handleGoogleSignin}
            className="w-full cursor-pointer flex items-center gap-3 justify-center border py-2 rounded"
          >
            <span className="text-xl">
              {" "}
              <Icon icon="flat-color-icons:google" />
            </span>{" "}
            <p className="lg:text-[15.8px] text-sm">Sign in with Google</p>
          </button>

          <div className="flex items-center gap-2 justify-center mt-3">
            <p className="text-sm text-gray-500">Already have an account ?</p>
            <Link
              to={"/login"}
              className="text-[#1d0800fd] lg:text-[15.8px] text-sm"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
