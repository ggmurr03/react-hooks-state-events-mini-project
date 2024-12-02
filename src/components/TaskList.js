import React from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  return (
    <div className="tasks">
      {tasks.map((t) => (
        <Task key={t.text} text={t.text} category={t.category} />
      ))}
    </div>
  );
}

export default TaskList;

