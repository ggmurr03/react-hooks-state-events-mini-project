import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data"; 

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [categoryState, setCategoryState] = useState("All");  
  const [tasksState, setTasksState] = useState(TASKS);  

  function onChangeCategory(category) {
    setCategoryState(category);
    if (category === "All") {
      setTasksState(TASKS);  
    } else {
      setTasksState(TASKS.filter(t => t.category === category));   
    }
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        categoryState={categoryState}
        onChangeCategory={onChangeCategory}
      />
      <NewTaskForm />
      <TaskList tasks={tasksState} /> 
    </div>
  );
}

export default App;
