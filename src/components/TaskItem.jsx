import React, { useState, useRef } from "react";
import { FaCaretDown } from "react-icons/fa";
import { useTasks } from "../contexts";

function TaskItem({ task }) {
  const [editable, setEditable] = useState(false);
  const [collapsed, setCollapsed] = useState(true);
  // const [isDone, setIsDone] = useState(task.isDone);

  const color = task.isDone ? "slate" : task.color;

  const taskRef = useRef(null);
  const descRef = useRef(null);

  const { updateTask, deleteTask, toggleTaskStatus } = useTasks();

  const save = () => {
    updateTask(task.id, taskRef.current.innerText, descRef.current.innerText);
    setEditable(false);
    setCollapsed(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      className={` task-outer mb-3 bg-gradient-to-r from-${color}-600 to-slate-700 to-70% hover:to-100% p-px rounded-xl ${
        collapsed ? "cursor-pointer" : ""
      }`}
      onClick={collapsed ? toggleCollapse : null}
    >
      <div
        className={`task-inner flex gap-4  ${
          collapsed ? "items-center" : "items-start"
        } bg-gradient-to-r from-slate-950/75 to-slate-900 to-80% hover:from-slate-950/60 hover:to-slate-900 hover:to-100% py-1 px-4 rounded-xl h-14 overflow-hidden`}
        style={collapsed ? {} : { height: "100%" }}
      >
        <input
          type="checkbox"
          checked={task.isDone}
          className={`scale-125 duration-0  ${collapsed ? "" : "mt-4"}`}
          onChange={() => {
            toggleTaskStatus(task.id);
          }}
        />
        <div className="text w-full overflow-hidden">
          <h3
            ref={taskRef}
            className={`overflow-hidden font-semibold text-lg text-${color}-500 ${
              collapsed ? "truncate" : ""
            } ${task.isDone && "line-through"} ${
              editable && "bg-slate-700/40 px-1 border rounded-lg"
            }`}
            contentEditable={editable}
            onKeyDown={editable ? handleKeyDown : undefined}
            suppressContentEditableWarning={true}
            dangerouslySetInnerHTML={{ __html: task.task }}
          ></h3>
          <p
            ref={descRef}
            className={`overflow-hidden opacity-70 text-sm px-1 block ${
              collapsed ? "truncate" : ""
            }  ${task.isDone && `line-through text-${color}-500`}  ${
              editable && "bg-slate-700/40 border rounded-lg mt-1"
            }`}
            contentEditable={editable}
            onKeyDown={editable ? handleKeyDown : undefined}
            suppressContentEditableWarning={true}
            dangerouslySetInnerHTML={{ __html: task.desc }}
          ></p>
          {!collapsed && (
            <div className="options flex justify-between my-2">
              {editable ? (
                <button
                  className="edit w-28 rounded py-1 font-semibold bg-green-600"
                  onClick={save}
                >
                  Save
                </button>
              ) : (
                <button
                  className="edit w-28 rounded py-1 font-semibold bg-blue-600"
                  onClick={() => {
                    setEditable(true);
                  }}
                >
                  Edit
                </button>
              )}
              <button
                className="delete w-28 rounded py-1 font-semibold bg-red-600"
                onClick={() => {
                  deleteTask(task.id);
                }}
              >
                Delete
              </button>
            </div>
          )}
        </div>
        <FaCaretDown
          className={`text-3xl cursor-pointer ${
            collapsed ? "" : "mt-2 rotate-180"
          }`}
          onClick={editable ? save : toggleCollapse}
        />
      </div>
    </div>
  );
}

export default TaskItem;
