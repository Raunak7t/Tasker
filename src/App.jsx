import { useEffect, useState } from "react";
import TaskItem from "./components/TaskItem";
import TailwindPurgeClasses from "./components/TailwindPurgeClasses";
import { TasksProvider } from "./contexts";
import Top from "./components/Top";
import { PiArrowBendRightUpBold } from "react-icons/pi";
import useLocalData from "./hooks/useLocalData";

function App() {
  const [addTaskActive, setAddTaskActive] = useState(false);
  const [userName, setUserName] = useState(useLocalData().userName);
  const [tasks, setTasks] = useState(useLocalData().tasks);

  const addTask = (task, desc) => {
    setTasks((prev) => [
      { id: Date.now(), task, desc, isDone: false, color: getRandomColor() },
      ...prev,
    ]);
    setAddTaskActive(false);
  };

  const updateTask = (id, task, desc) => {
    setTasks((prev) =>
      prev.map((t) => {
        return t.id === id ? { ...t, task, desc } : t;
      })
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => id !== t.id));
  };

  const toggleTaskStatus = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, isDone: !t.isDone } : t))
    );
  };

  const getRandomColor = () => {
    const colors = ["red", "blue", "yellow", "green"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  useEffect(() => {
    localStorage.setItem("taskerData", JSON.stringify({ userName, tasks }));
  }, [tasks, userName]);

  return (
    <TasksProvider
      value={{
        userName,
        setUserName,
        tasks,
        addTask,
        updateTask,
        deleteTask,
        toggleTaskStatus,
      }}
    >
      <TailwindPurgeClasses />
      <div className="main w-96 sm:w-full h-5/6 sm:h-full bg-slate-950 rounded-2xl sm:rounded-none text-white p-2 pl-4 relative overflow-hidden select-none">
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
            Tasks: <span>{tasks.length}</span>
          </p>
          <div className="all-tasks">
            {tasks.length ? (
              tasks.map((task) => {
                return <TaskItem key={task.id} task={task} />;
              })
            ) : (
              <h1 className="pl-7 font-semibold text-xl flex justify-center items-baseline">
                No task to do. Keep adding
                <PiArrowBendRightUpBold className="text-4xl" />
              </h1>
            )}
          </div>
        </div>
      </div>
    </TasksProvider>
  );
}

export default App;
