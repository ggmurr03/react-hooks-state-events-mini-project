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
  }

  function onTaskFormSubmit(newTask) {
    setTasksState(prevTasks => [...prevTasks, newTask]);
  }

  function handleDeleteTask(taskText) {
    setTasksState(prevTasks => prevTasks.filter(task => task.text !== taskText));
  }

  const filteredTasks = categoryState === "All"
    ? tasksState
    : tasksState.filter(t => t.category === categoryState);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        categoryState={categoryState}
        onChangeCategory={onChangeCategory}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
