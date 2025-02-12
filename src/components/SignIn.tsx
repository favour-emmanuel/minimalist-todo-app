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
    <div className=" px-10">
      <Link
        to={"/"}
        className="flex items-center gap-2 lg:py-10 py-12  text-black"
      >
        <Icon icon="mi:home" className="text-lg" />
        Back to Home
      </Link>
      <div className="flex items-center justify-center h-[70vh]">
        <div className="bg-[#f9f9f9ea] p-8 rounded-xl shadow-lg w-[24rem]">
          <h2 className="text-2xl font-semibold text-center text-[#1d0800fd] mb-6">
            Welcome ❤
          </h2>
          <form className="space-y-6" onSubmit={handleSignUp}>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 border rounded outline-none"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded outline-none"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border rounded outline-none"
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
            <p>Sign in with Google</p>
          </button>

          <div className="flex items-center gap-2 justify-center mt-3">
            <p className="text-sm text-gray-500">Already have an account ?</p>
            <Link to={"/login"} className="text-[#1d0800fd]">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
