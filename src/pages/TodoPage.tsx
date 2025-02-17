import { FaCheckCircle, FaList, FaTimesCircle } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { loadTasks, saveTasks } from "../utils/locallstorage";

import { Task } from "../Types/task";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import axios from "axios";

const TodoPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<"all" | "completed" | "pending">("all");

  useEffect(() => {
    const fetchTasks = async () => {
      const storedTasks = loadTasks();
      if (storedTasks.length > 0) {
        setTasks(storedTasks);
      } else {
        const response = await axios.get<Task[]>(
          "https://jsonplaceholder.typicode.com/todos?_limit=5"
        );
        setTasks(response.data);
        saveTasks(response.data);
      }
    };
    fetchTasks();
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const handleAddTask = (title: string) => {
    const newTask: Task = { id: Date.now(), title, completed: false };
    setTasks((prev) => [...prev, newTask]);
  };

  const handleToggleComplete = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDelete = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) =>
    filter === "all"
      ? true
      : filter === "completed"
      ? task.completed
      : !task.completed
  );

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>
      <TaskForm onAddTask={handleAddTask} />
      <div className="filters">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          <FaList /> All
        </button>
        <button
          className={filter === "completed" ? "active" : ""}
          onClick={() => setFilter("completed")}
        >
          <FaCheckCircle /> Completed
        </button>
        <button
          className={filter === "pending" ? "active" : ""}
          onClick={() => setFilter("pending")}
        >
          <FaTimesCircle /> Pending
        </button>
      </div>
      <TaskList
        tasks={filteredTasks}
        onToggleComplete={handleToggleComplete}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default TodoPage;