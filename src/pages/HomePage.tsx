import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#f7f7f7] p-4">
        <div className="text-center mb-2 flex items-center space-x-2">
          <h1 className="text-4xl font-bold text-[#1d0800e4]">
            Stay Organized, Stay Productive
          </h1>
          <span className="h-2 w-2 bg-teal-600 rounded-full animate-ping"></span>
        </div>
        <p className="text-gray-600 text-center text-[15px]">
          Manage your tasks effortlessly with our simple and elegant to-do app.
        </p>
        <Link
          to={"/signIn"}
          className="mt-16 py-3 flex justify-center items-center rounded-lg cursor-pointer text-[#f7f7f7] bg-[#1d0800fd] max-w-[18rem] w-full"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
