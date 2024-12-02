import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  
  const [text, setText] = useState("")
  const [category, setCategory] = useState(categories[1]); 

  
  function handleTextChange(event) {
    setText(event.target.value);
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value)
  }

  
  function handleSubmit(event) {
    event.preventDefault();  

    
    const newTask = {
      text,
      category,
    };

    onTaskFormSubmit(newTask);
    setText("");
    setCategory(categories[1]);  
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={text}
          onChange={handleTextChange}
          required
        />
      </label>

      <label>
        Category
        <select name="category" value={category} onChange={handleCategoryChange} required>
          {categories
            .filter((category) => category !== "All") 
            .map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
        </select>
      </label>

      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
