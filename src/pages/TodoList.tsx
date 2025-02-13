import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { auth, db } from "../firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

const TodoList = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<{ id: string; text: string }[]>([]);
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
  const [editedTaskText, setEditedTaskText] = useState<string>("");

  const user = auth.currentUser;
  const taskCollectionRef = collection(db, "tasks");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const data = await getDocs(taskCollectionRef);
    setTasks(
      data.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as {
        id: string;
        text: string;
      }[]
    );
  };

  // Add new task
  const addTask = async () => {
    if (!task.trim()) return;
    const newTask = { id: uuidv4(), text: task, userId: user?.uid };

    await addDoc(taskCollectionRef, newTask);
    setTasks([...tasks, newTask]);
    setTask("");
  };

  // Delete task
  const deleteTask = async (id: string) => {
    await deleteDoc(doc(db, "tasks", id));
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Enable editing mode
  const startEditing = (id: string, text: string) => {
    setEditingTaskId(id);
    setEditedTaskText(text);
  };

  // Handle updating task in Firestore
  const updateTask = async (id: string) => {
    if (!editedTaskText.trim()) return;

    const taskRef = doc(db, "tasks", id);
    await updateDoc(taskRef, { text: editedTaskText });

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: editedTaskText } : task
      )
    );

    setEditingTaskId(null); // Exit edit mode
    setEditedTaskText("");
  };

  return (
    <div className="lg:px-10 px-4">
      <Link
        to={"/"}
        className="flex items-center gap-2 lg:py-8 pt-5 text-black"
      >
        <Icon icon="mi:home" className="lg:text-base text-[15.8px]" />
        Back to Home
      </Link>
      <h1 className="font-bold lg:text-2xl lg:text-center text-lg lg:mt-0 mt-8">
        <span className="font-light mr-1">Welcome 😍</span>{" "}
        {user?.displayName || "user"}
      </h1>
      <div className="bg-[#E0DFDB] rounded-sm max-w-[55rem] py-5 lg:px-5 px-3.5 w-full mx-auto lg:my-10 my-5">
        <div className="flex justify-between items-center lg:gap-0 gap-12">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Create your task.."
            className="border w-full lg:max-w-[28rem] max-w-[23rem] border-[#70412e] outline-none rounded-md py-2.5 px-2"
          />
          <button
            onClick={addTask}
            className="bg-[#61250efd] py-2.5 px-3 rounded-md text-white cursor-pointer"
          >
            Add
          </button>
        </div>

        {/* Task List */}
        <ul className="mt-5">
          {tasks.map(({ id, text }) => (
            <li
              key={id}
              className="flex justify-between items-center bg-white p-3 my-2 rounded-md"
            >
              {editingTaskId === id ? (
                <input
                  type="text"
                  value={editedTaskText}
                  onChange={(e) => setEditedTaskText(e.target.value)}
                  className="border w-full outline-none bg-transparent"
                />
              ) : (
                <span>{text}</span>
              )}

              <div className="flex gap-3">
                {editingTaskId === id ? (
                  <button
                    className="text-green-500"
                    onClick={() => updateTask(id)}
                  >
                    <Icon icon="akar-icons:check" width="24" height="24" />
                  </button>
                ) : (
                  <button
                    className="text-blue-500"
                    onClick={() => startEditing(id, text)}
                  >
                    <Icon icon="akar-icons:edit" width="24" height="24" />
                  </button>
                )}

                <button
                  className="text-[#ff4444]"
                  onClick={() => deleteTask(id)}
                >
                  <Icon
                    icon="solar:trash-bin-trash-linear"
                    width="24"
                    height="24"
                  />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
