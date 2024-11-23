



import React, { useState } from "react";
import TaskItem from "./TaskItem";
import { useTasks } from "../context/TaskContext";

const TaskList = () => {
  const { tasks, deleteTask, setTaskToEdit, filterTasks, sortTasks } = useTasks();
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("dueDate");

  const filteredTasks = filter === "All" ? tasks : filterTasks(filter);
  const sortedTasks = sortTasks(sortBy);

  return (
    <div>
      <div className="flex space-x-4 mb-6">
        <select
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
          className="px-4 py-2 border rounded"
        >
          <option value="All">All Tasks</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <select
          onChange={(e) => setSortBy(e.target.value)}
          value={sortBy}
          className="px-4 py-2 border rounded"
        >
          <option value="dueDate">Sort by Due Date</option>
          <option value="title">Sort by Title</option>
        </select>
      </div>

      {filteredTasks.length > 0 ? (
        sortedTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            editTask={setTaskToEdit}
          />
        ))
      ) : (
        <p className="text-gray-500">No tasks available.</p>
      )}
    </div>
  );
};

export default TaskList;
