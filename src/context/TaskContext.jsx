import React, { createContext, useState, useContext, useEffect } from 'react';

const TaskContext = createContext();

export const useTasks = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now() }]);
  };

  const editTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
    setTaskToEdit(null);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filterTasks = (status) => {
    return tasks.filter((task) => task.status === status);
  };

  const sortTasks = (by = 'dueDate') => {
    return tasks.sort((a, b) => {
      if (by === 'dueDate') {
        return new Date(a.dueDate) - new Date(b.dueDate);
      }
      return a.title.localeCompare(b.title);
    });
  };

  return (
    <TaskContext.Provider
      value={{ tasks, taskToEdit, addTask, editTask, deleteTask, filterTasks, sortTasks, setTaskToEdit }}
    >
      {children}
    </TaskContext.Provider>
  );
};
