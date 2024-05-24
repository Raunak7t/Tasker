import React from "react";

function AddTask({ task, setTask, desc, setDesc }) {
  return (
    <div className="w-10/12 m-auto">
      <div className="">
        <label htmlFor="task-name" className="font-semibold text-lg">
          Add task:
        </label>
        <input
          type="text"
          id="task-name"
          className="w-full mt-0.5 mb-2 px-2 py-1 border border-slate-400 bg-slate-700 rounded-md"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="task-desc" className="font-semibold text-lg">
          Add task description:
        </label>
        <textarea
          rows="2"
          id="task-desc"
          className="w-full mt-0.5 mb-2 py-1 px-2 border border-slate-400 bg-slate-700 rounded-md resize-none"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        ></textarea>
      </div>
    </div>
  );
}

export default AddTask;
