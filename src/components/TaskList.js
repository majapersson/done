import React, { Component } from "react";
import { Link } from "react-router-dom";
import Task from "./Task.js";

class TaskList extends Component {
  render() {
    const { tasks, click, countChildren } = this.props;
    return (
      <section className="TodoList">
        {tasks.map(
          task =>
            countChildren(task.id) > 0 ? (
              <Link to={task.id} key={task.id} className="Task">
                {task.title}
                <span>{countChildren(task.id)}</span>
              </Link>
            ) : (
              <Task
                key={task.id}
                task={task}
                click={click}
                children={countChildren(task.id)}
              />
            )
        )}
      </section>
    );
  }
}

export default TaskList;
