import { useState } from "react";
import TaskItem from "./components/TaskItem";
import TailwindPurgeClasses from "./components/TailwindPurgeClasses";
import AddTask from "./components/AddTask";
import { FaSave, FaUserEdit } from "react-icons/fa";
import { FiCheck, FiPlus } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

function App() {
  const [nameEditable, setNameEditable] = useState(false);
  const [nameBoxWidth, setNameBoxWidth] = useState(0);
  const [addTaskActive, setAddTaskActive] = useState(true);

  const changeHandler = (evt) => {
    setNameBoxWidth(evt.target.value.length);
  };

  const addTask = () => {
    setAddTaskActive((prev) => (prev ? false : true));
  };

  return (
    <>
      <TailwindPurgeClasses />
      <div className="main w-96 sm:w-full h-5/6 sm:h-full bg-slate-950 rounded-2xl sm:rounded-none text-white p-2 pl-4 relative overflow-hidden">
        <div className="p-4 pb-1 absolute top-0 left-0 w-full bg-slate-950/10 z-50 backdrop-blur-lg">
          <div className="top-bar font-bold text-2xl flex justify-between items-center flex-wrap gap-y-5">
            <h1 className="flex items-center">
              <span>
                <span>Hey,</span>
                <input
                  type="text"
                  className={`${
                    nameEditable
                      ? " mx-2 border border-slate-400 bg-slate-700 rounded-md "
                      : "border-none bg-transparent"
                  } overflow-ellipsis max-w-40 px-2`}
                  disabled={!nameEditable}
                  onChange={changeHandler}
                  style={{ width: nameBoxWidth + 1.5 + "ch" }}
                />
              </span>
              <span className="cursor-pointer">
                {nameEditable ? (
                  <FaSave
                    onClick={() => {
                      setNameEditable(false);
                    }}
                  />
                ) : (
                  <FaUserEdit
                    onClick={() => {
                      setNameEditable(true);
                    }}
                  />
                )}
              </span>
            </h1>
            {addTaskActive ? (
              <div className="flex items-center gap-4">
                <span
                  className="add text-xl bg-red-700 rounded-full p-2 cursor-pointer "
                  onClick={addTask}
                >
                  <RxCross2 />
                </span>
                <span
                  className="add text-3xl bg-green-600 rounded-full p-3 cursor-pointer "
                  onClick={addTask}
                >
                  <FiCheck />
                </span>
              </div>
            ) : (
              <span
                className="add text-3xl bg-slate-800 rounded-full p-3 cursor-pointer "
                onClick={addTask}
              >
                <FiPlus />
              </span>
            )}
          </div>
          {addTaskActive ? <AddTask /> : ""}
        </div>
        <div
          className={`${
            addTaskActive ? "pt-60" : "pt-16"
          } content overflow-y-scroll h-full pr-2 pb-16`}
        >
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
