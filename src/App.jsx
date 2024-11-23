


// import React, { useState, useEffect } from "react";
// import TaskForm from "./components/TaskForm";
// import TaskList from "./components/TaskList";
// import { motion } from "framer-motion";
// import "./App.css";

// const App = () => {
//   const [tasks, setTasks] = useState([]);
//   const [taskToEdit, setTaskToEdit] = useState(null);

//   // Load tasks from local storage on initial render
//   useEffect(() => {
//     const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
//     setTasks(savedTasks);
//   }, []);

//   // Save tasks to local storage whenever the tasks state changes
//   useEffect(() => {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   }, [tasks]);

//   // Add a new task to the list
//   const addTask = (newTask) => {
//     setTasks([...tasks, { ...newTask, id: Date.now() }]);
//   };

//   // Edit an existing task
//   const editTask = (updatedTask) => {
//     setTasks(
//       tasks.map((task) =>
//         task.id === updatedTask.id ? updatedTask : task
//       )
//     );
//     setTaskToEdit(null); // Clear the task to edit after update
//   };

//   // Delete a task
//   const deleteTask = (id) => {
//     if (window.confirm("Are you sure you want to delete this task?")) {
//       setTasks(tasks.filter((task) => task.id !== id));
//     }
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <motion.h1
//         className="text-4xl font-extrabold text-center text-gray-800 mb-8"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         Task Manager
//       </motion.h1>

//       {/* TaskForm Component */}
//       <TaskForm taskToEdit={taskToEdit} addTask={addTask} editTask={editTask} />

//       {/* TaskList Component */}
//       <TaskList tasks={tasks} deleteTask={deleteTask} editTask={setTaskToEdit} />
//     </div>
//   );
// };

// export default App;




import React from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { motion } from "framer-motion";
import { TaskProvider } from "./context/TaskContext";
import "./App.css";

const App = () => {
  return (
    <TaskProvider>
      <div className="container mx-auto p-6">
        <motion.h1
          className="text-4xl font-extrabold text-center text-gray-800 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Task Manager
        </motion.h1>

        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
};

export default App;
