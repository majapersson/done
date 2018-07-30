import React, { Component } from "react";
import Task from "./Task.js";

class TaskList extends Component {
  render() {
    const { tasks, click, setParent, returnChildren } = this.props;
    return (
      <section className="TodoList">
        {tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            click={returnChildren(task.id) > 0 ? setParent : click}
            children={returnChildren(task.id)}
          />
        ))}
      </section>
    );
  }
}

export default TaskList;
