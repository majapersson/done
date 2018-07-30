import React from "react";
import "./styles/Task.css";

const Task = ({ task, index, click }) => {
  return (
    <article
      className={`Task ${
        task.completed && task.children.length === 0 ? "completed" : ""
      }`}
      onClick={() => click(index)}>
      <div className="Task__title">{task.title}</div>
      {task.children.length > 0 ? (
        <div className="Task__children">{task.children.length}</div>
      ) : (
        ""
      )}
    </article>
  );
};

export default Task;
