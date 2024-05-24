import { createContext, useContext } from "react";

export const tasksContext = createContext({
  userName: "",
  updateUserName: () => {},
  tasks: [
    {
      id: 1,
      task: "",
      desc: "",
      isDone: true,
    },
  ],
  addTask: (task, desc) => {},
  updateTask: (id, task, desc) => {},
  deleteTask: (id) => {},
  toggleTaskStatus: (id) => {},
});

export const useTasks = () => useContext(tasksContext);

export const TasksProvider = tasksContext.Provider;
