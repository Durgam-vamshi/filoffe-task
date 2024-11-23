import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTasks } from "../context/TaskContext";

const TaskForm = () => {
  const { taskToEdit, addTask, editTask } = useTasks();
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    status: "Pending",
  });

  useEffect(() => {
    if (taskToEdit) {
      setTask(taskToEdit);
    }
  }, [taskToEdit]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskToEdit) {
      editTask(task);
    } else {
      addTask(task);
    }
    setTask({ title: "", description: "", dueDate: "", status: "Pending" });
  };

  return (
    <motion.div
      className="mb-6 p-6 border border-gray-300 rounded-lg bg-white shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold text-gray-800">
        {taskToEdit ? "Edit Task" : "Add a New Task"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleInputChange}
          required
          placeholder="Title"
          className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <textarea
          name="description"
          value={task.description}
          onChange={handleInputChange}
          required
          placeholder="Description"
          className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <input
          type="date"
          name="dueDate"
          required
          value={task.dueDate}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <select
          name="status"
          value={task.status}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <button
          type="submit"
          className="w-full bg-yellow-600 text-white py-3 rounded-md hover:bg-yellow-700 transition duration-300"
        >
          {taskToEdit ? "Update Task" : "Add Task"}
        </button>
      </form>
    </motion.div>
  );
};

export default TaskForm;
