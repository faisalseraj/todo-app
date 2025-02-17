import { FaCheck, FaTrash } from "react-icons/fa";

import React from "react";
import { Task } from "../Types/task";

interface Props {
  task: Task;
  onToggleComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskItem: React.FC<Props> = ({ task, onToggleComplete, onDelete }) => {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleComplete(task.id)}
      />
      <span>{task.title}</span>
      <div className="task-buttons">
        <button onClick={() => onToggleComplete(task.id)} className="check-btn">
          <FaCheck />
        </button>
        <button onClick={() => onDelete(task.id)} className="delete-btn">
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;