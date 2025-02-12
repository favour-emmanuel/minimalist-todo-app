import { Link } from "react-router-dom";
import bgImage from "/cta-shape-1.png";

const HomePage = () => {
  return (
    <div className="relative">
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#f7f7f7] p-4">
        <p className="mb-10 lg:mb-[7rem] px-3 py-1.5 rounded-full shadow border border-[#cd9f8cc8]  bg-[#e8e0e064]">
          Minimalist To-do App
        </p>
        <div className="text-center mb-3 flex items-center space-x-2">
          <h1 className="lg:text-5xl text-4xl font-bold text-[#1d0800e4]">
            Stay Organized, Stay Productive
          </h1>
          <span className="h-2 w-2 bg-teal-600 rounded-full animate-ping"></span>
        </div>
        <p className="text-gray-600 lg:mt-0 mt-5 text-center lg:text-[15.8px] text-lg">
          Manage your tasks effortlessly with our simple and elegant{" "}
          <span className="font-bold text-[#1d0800e4]">to-do app</span>.
        </p>
        <Link
          to={"/signIn"}
          className="mt-16 z-50 py-3.5 flex justify-center items-center rounded-lg cursor-pointer text-[#f7f7f7] bg-[#1d0800fd] max-w-[18rem] w-full"
        >
          Get Started
        </Link>
      </div>
      <img src={bgImage} alt="" className="absolute bottom-0" />
    </div>
  );
};

export default HomePage;
