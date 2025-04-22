import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    
  ]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
    toast.success('Task added!');
  };
  

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    toast.info('Task deleted.');
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};
