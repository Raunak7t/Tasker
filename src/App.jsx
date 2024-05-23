import { FaSave, FaUserEdit } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import TaskItem from "./components/TaskItem";
import TailwindPurgeClasses from "./components/TailwindPurgeClasses";
import { useState } from "react";
import AddTask from "./components/AddTask";

function App() {
  const [nameEditable, setNameEditable] = useState(false);

  const [width, setWidth] = useState(0);

  const changeHandler = (evt) => {
    setWidth(evt.target.value.length);
  };

  return (
    <>
      <TailwindPurgeClasses />
      <div className="main w-96 sm:w-full h-5/6 sm:h-full bg-slate-950 rounded-2xl sm:rounded-none text-white p-2 pl-4 relative overflow-hidden">
        <div className="p-4 pb-1 absolute top-0 left-0 w-full bg-slate-950/10 z-50 backdrop-blur-lg">
          <div className="top-bar font-bold text-2xl flex justify-between items-center">
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
                  style={{ width: width + 1.5 + "ch" }}
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
            <span className="add text-3xl bg-slate-800 rounded-full p-3 cursor-pointer">
              <IoMdAdd />
            </span>
          </div>
          {/* <AddTask /> */}
        </div>
        <div className="content overflow-y-scroll h-full pr-2 py-16">
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
