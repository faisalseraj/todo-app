import React, { useState } from "react";

import { FaPlus } from "react-icons/fa";

interface Props {
  onAddTask: (title: string) => void;
}

const TaskForm: React.FC<Props> = ({ onAddTask }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return; // Prevent adding empty tasks
    onAddTask(title);
    setTitle(""); // Clear input field after task is added
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter a task..."
      />
      <button type="submit" disabled={!title.trim()}>
        <FaPlus /> Add
      </button>
    </form>
  );
};

export default TaskForm;