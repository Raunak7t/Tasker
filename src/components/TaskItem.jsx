import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";

function TaskItem({ color }) {
  const [collapsed, setCollapsed] = useState(true);
  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div
      className={`task-outer mb-3 bg-gradient-to-r from-${color}-600 to-slate-700 to-70% hover:to-100% p-px rounded-xl ${
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
          className={`scale-125 duration-0  ${collapsed ? "" : "mt-4"}`}
        />
        <div className="text w-full overflow-hidden">
          <h3
            className={`overflow-hidden font-semibold text-lg text-${color}-500 ${
              collapsed ? "text-nowrap text-ellipsis" : ""
            }`}
          >
            Task title Lorem ipsum dolor sit amet, consectetur
          </h3>
          <p
            className={`overflow-hidden opacity-70 text-sm px-1 ${
              collapsed ? "text-nowrap text-ellipsis" : ""
            }`}
          >
            Task Description {color} Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nihil repellendus consectetur ex corrupti impedit
            quae earum incidunt cumque ut velit?
          </p>
          {collapsed ? (
            ""
          ) : (
            <div className="options flex justify-between my-2">
              <button className="edit w-28 rounded py-1 font-semibold bg-blue-600">
                Edit
              </button>
              <button className="delete w-28 rounded py-1 font-semibold bg-red-600">
                Delete
              </button>
            </div>
          )}
        </div>
        <FaCaretDown
          className={`text-3xl cursor-pointer ${
            collapsed ? "" : "mt-2 rotate-180"
          }`}
          onClick={toggleCollapse}
        />
      </div>
    </div>
  );
}

export default TaskItem;
