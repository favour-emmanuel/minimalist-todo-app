import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

const Login = () => {
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
          <form className="space-y-7">
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
            <p> Sign in with Google</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
