import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";

const TodoList = () => {
  return (
    <div className="lg:px-10 px-4">
      <Link
        to={"/"}
        className="flex items-center gap-2 lg:py-8 pt-5 text-black"
      >
        <Icon icon="mi:home" className="lg:text-base text-[15.8px]" />
        Back to Home
      </Link>
      <h1 className="font-bold lg:text-2xl text-center text-lg ">
        Welcome user,
      </h1>
      <div className="bg-[#E0DFDB] rounded-sm max-w-[55rem] p-5 w-full mx-auto my-10">
        <div className="flex justify-between items-center">
          <input
            type="text"
            placeholder="Create your task.."
            className="border  w-full max-w-[26rem] border-[#70412e] outline-none rounded-md py-2.5 px-2"
          />
          <button className="bg-[#61250efd] py-2.5 px-3 rounded-md text-white cursor-pointer">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
