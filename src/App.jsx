import { useState } from "react";
import TaskItem from "./components/TaskItem";
import TailwindPurgeClasses from "./components/TailwindPurgeClasses";
import { TasksProvider } from "./contexts";
import Top from "./components/Top";

function App() {
  const [addTaskActive, setAddTaskActive] = useState(false);

  const [userName, setUserName] = useState("Raunak");
  const updateUserName = (evt) => {
    setUserName(evt.target.value);
  };

  const [tasks, setTasks] = useState([]);
  console.log(tasks);
  const addTask = (task, desc) => {
    setTasks((prev) => [{ id: Date.now(), task, desc }, ...prev]);
  };

  return (
    <TasksProvider
      value={{
        userName,
        updateUserName,
        tasks,
        addTask,
        // updateTask,
        // deleteTask,
        // toggleTaskStatus,
      }}
    >
      <TailwindPurgeClasses />
      <div className="main w-96 sm:w-full h-5/6 sm:h-full bg-slate-950 rounded-2xl sm:rounded-none text-white p-2 pl-4 relative overflow-hidden">
        <Top
          addTaskActive={addTaskActive}
          setAddTaskActive={setAddTaskActive}
        />

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
    </TasksProvider>
  );
}

export default App;
