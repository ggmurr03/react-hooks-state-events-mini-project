import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="tasks">
      {tasks.map((t) => (
        <Task 
          key={t.text} 
          text={t.text} 
          category={t.category} 
          onDeleteTask={onDeleteTask} // Pass the delete handler
        />
      ))}
    </div>
  )
}

export default TaskList;
