import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { scheduleNotification } from '../hooks/useNotifications';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    const newTask = { id: uuidv4(), ...task };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    scheduleNotification(newTask);
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const editTask = (editedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === editedTask.id ? editedTask : task))
    );
    scheduleNotification(editedTask);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, editTask }}>
      {children}
    </TaskContext.Provider>
  );
};
