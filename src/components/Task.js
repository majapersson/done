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
        onClick={() => click(task.id)}>
        {task.title}
      </article>
    );
  }
}

export default Task;
