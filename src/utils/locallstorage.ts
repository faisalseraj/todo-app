export const loadTasks = () => {
    const tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
  };
  
  export const saveTasks = (tasks: any) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };