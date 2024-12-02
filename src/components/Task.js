import React from "react";

function Task({text, category, setTasks, tasksState}) {

  function onDelete(){
    setTasks(()=> tasksState.filter(task=>task.text !== text))

  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={onDelete}>X</button>
    </div>
  );
}

export default Task;
