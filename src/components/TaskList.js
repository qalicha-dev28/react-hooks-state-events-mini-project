import React from "react";
import Task from "./Task"; // Import the Task component

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task
          key={index} // Using index as key for now, but a unique ID from data is preferred if available
          text={task.text}
          category={task.category}
          // Pass a callback that invokes onDeleteTask with the task to be deleted
          onDelete={() => onDeleteTask(task)}
        />
      ))}
    </div>
  );
}

export default TaskList;
