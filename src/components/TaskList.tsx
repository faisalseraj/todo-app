import React from "react";
import { Task } from "../Types/task";
import TaskItem from "./TaskItems";

interface Props {
  tasks: Task[];
  onToggleComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskList: React.FC<Props> = ({ tasks, onToggleComplete, onDelete }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;