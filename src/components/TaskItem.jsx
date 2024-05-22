import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";

function TaskItem({ color }) {
  return (
    <div
      className={`task-outer mb-3 bg-gradient-to-r from-${color}-600 to-slate-700 to-70% hover:to-100% p-px rounded-xl cursor-pointer`}
    >
      <div
        className={`task-inner flex gap-4 items-center bg-gradient-to-r from-slate-950/65 to-slate-900 to-80% py-1 px-4 rounded-xl`}
      >
        <input type="radio" name="" id="" />
        <div className="text w-full">
          <h3 className={`font-semibold text-lg text-${color}-500`}>
            Task title
          </h3>
          <p className="opacity-70 text-sm pb-1">Task Description {color}</p>
        </div>
        <FaCaretDown className="text-2xl" />
      </div>
    </div>
  );
}

export default TaskItem;
