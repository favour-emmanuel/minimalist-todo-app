import React, { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      toast.success("Login Succesful");
      navigate("/todo");
    } catch (err) {
      toast.error("Error Loggin in");
    }
  };

  return (
    <div className="px-10">
      <Link
        to={"/"}
        className="flex items-center gap-2 lg:py-10 py-12  text-black"
      >
        <Icon icon="mi:home" className="text-lg" />
        Back to Home
      </Link>
      <div className="flex items-center justify-center min-[70vh]">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
          <form className="space-y-7" onSubmit={handleLogin}>
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
              Login
            </button>
          </form>
          <div className="flex items-center my-4">
            <div className="flex-grow border-t"></div>
            <span className="mx-2 text-gray-500">or</span>
            <div className="flex-grow border-t"></div>
          </div>
          <div className="w-full flex items-center gap-3 justify-center border py-2 rounded">
            <span className="text-xl">
              <Icon icon="flat-color-icons:google" />
            </span>
            <p> Continue with Google</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
