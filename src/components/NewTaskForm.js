import React, { useState } from "react";
import { v4 as uuid } from 'uuid'; // Import uuid for unique IDs

function NewTaskForm({ categories, onTaskFormSubmit }) {
  // State for controlled inputs
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[0] || ""); // Default to first category (or empty)

  // Filter out "All" category for the dropdown options
  const formCategories = categories.filter(cat => cat !== "All");

  // Handle text input change
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  // Handle category select change
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    const newTask = {
      id: uuid(), // Generate unique ID
      text: text,
      category: category,
    };

    onTaskFormSubmit(newTask); // Call the callback prop

    // Reset form fields
    setText("");
    setCategory(formCategories[0] || ""); // Reset to first available category
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={handleTextChange} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={handleCategoryChange}>
          {formCategories.map(cat => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
