import { FaSave, FaUserEdit } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import TaskItem from "./components/TaskItem";
import TailwindPurgeClasses from "./components/TailwindPurgeClasses";

function App() {
  return (
    <>
      <TailwindPurgeClasses />
      <div className="w-96 bg-slate-950 h-5/6 rounded-2xl text-white p-4">
        <div className="top-bar font-bold text-2xl flex justify-between items-center">
          <h1 className="flex items-center gap-4">
            <span>Hey, Raunak</span>
            <span>
              <FaUserEdit />
              <FaSave className="hidden" />
            </span>
          </h1>
          <span className="add text-3xl bg-slate-800 rounded-full p-3">
            <IoMdAdd />
          </span>
        </div>
        <div className="content">
          <p className="opacity-70 text-sm mb-2">
            Tasks: <span>69</span>
          </p>
          <div className="all-tasks">
            <TaskItem color="red" />
            <TaskItem color="yellow" />
            <TaskItem color="blue" />
            <TaskItem color="green" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
