import React, { useState } from "react";
import { CATEGORIES, TASKS } from "../data"; // Import data
import CategoryFilter from "./CategoryFilter";
import TaskList from "./TaskList";
import NewTaskForm from "./NewTaskForm";

function App() {
  // State for all tasks
  const [tasks, setTasks] = useState(TASKS);
  // State for the currently selected category filter
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Callback to handle task deletion
  const handleDeleteTask = (taskToDelete) => {
    setTasks(tasks.filter(task => task !== taskToDelete));
  };

  // Callback to handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  // Callback to handle adding a new task
  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // Filter tasks based on selected category
  const tasksToDisplay = tasks.filter(task => {
    if (selectedCategory === "All") {
      return true; // Show all tasks
    }
    return task.category === selectedCategory;
  });

  return (
    <div className="App">
      <h2>My Tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
      />
      <NewTaskForm
        categories={CATEGORIES} // Pass all categories, NewTaskForm will filter "All"
        onTaskFormSubmit={handleAddTask}
      />
      <TaskList
        tasks={tasksToDisplay} // Pass filtered tasks
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;
