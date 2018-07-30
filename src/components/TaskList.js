import React, { Component } from "react";
import Task from "./Task.js";

class TaskList extends Component {
  render() {
    const { tasks, click } = this.props;
    return (
      <section className="TodoList">
        {tasks.map((task, i) => (
          <Task key={i} task={task} index={i} click={click} />
        ))}
      </section>
    );
  }
}

export default TaskList;
