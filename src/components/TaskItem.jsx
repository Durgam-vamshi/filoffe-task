


import React from "react";
import { motion } from "framer-motion";

const TaskItem = ({ task, deleteTask, editTask }) => {
  return (
    <motion.div
      className="flex justify-between items-center p-6 border border-gray-300 rounded-lg bg-white shadow-md hover:shadow-xl transition duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex flex-col space-y-2">
        <h3 className="font-semibold text-lg text-gray-800">{task.title}</h3>
        <p className="text-gray-600">{task.description}</p>
        <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
        <p className="text-sm font-semibold">{task.status}</p>
      </div>

      <div className="flex space-x-4">
        <button
          onClick={() => editTask(task)}
          className="bg-yellow-400 text-white py-2 px-4 rounded-lg hover:bg-yellow-500 transition duration-300"
        >
          Edit
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
        >
          Delete
        </button>
      </div>
    </motion.div>
  );
};

export default TaskItem;
