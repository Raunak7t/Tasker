import React, { useState, useSyncExternalStore } from "react";
import { useTasks } from "../contexts";
import { FaSave, FaUserEdit } from "react-icons/fa";
import { FiCheck, FiPlus } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import AddTask from "./AddTask";

function Top({ addTaskActive, setAddTaskActive }) {
  const { userName, updateUserName, addTask } = useTasks();

  const [name, setName] = useState(userName);
  const [nameEditable, setNameEditable] = useState(false);
  const [task, setTask] = useState("");
  const [desc, setDesc] = useState("");

  const toggleAddTask = () => {
    setAddTaskActive(!addTaskActive);
  };

  return (
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
              } overflow-ellipsis max-w-36 px-2`}
              style={{ width: name.length + 1.5 + "ch" }}
              disabled={!nameEditable}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </span>
          <span className="cursor-pointer">
            {nameEditable ? (
              <FaSave
                onClick={() => {
                  setNameEditable(false);
                  updateUserName(name);
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
              onClick={toggleAddTask}
            >
              <RxCross2 />
            </span>
            <span
              className="add text-3xl bg-green-600 rounded-full p-3 cursor-pointer "
              onClick={() => {
                task && addTask(task, desc);
                setTask("");
                setDesc("");
              }}
            >
              <FiCheck />
            </span>
          </div>
        ) : (
          <span
            className="add text-3xl bg-slate-800 rounded-full p-3 cursor-pointer "
            onClick={toggleAddTask}
          >
            <FiPlus />
          </span>
        )}
      </div>
      {addTaskActive && (
        <AddTask task={task} desc={desc} setTask={setTask} setDesc={setDesc} />
      )}
    </div>
  );
}

export default Top;
