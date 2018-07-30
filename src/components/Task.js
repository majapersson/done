import React, { Component } from "react";
import "./styles/Task.css";

class Task extends Component {
  render() {
    const { task, click, children } = this.props;
    return (
      <article
        className={`Task ${
          task.completed && children === 0 ? "completed" : ""
        }`}
        onClick={() => click(task)}>
        <div className="Task__title">{task.title}</div>
        {children > 0 ? <div className="Task__children">{children}</div> : ""}
      </article>
    );
  }
}

export default Task;
