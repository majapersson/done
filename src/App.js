import React, { Component } from "react";
import Header from "./components/Header.js";
import TaskList from "./components/TaskList.js";
import "./App.css";

class App extends Component {
  state = {
    tasks: this.props.tasks,
    parentTasks: this.props.tasks.filter(task => !task.parent),
    currentTasks: []
  };

  countChildren = id => {
    return this.props.tasks.filter(task => task.parent === id).length;
  };

  toggleCompleted = id => {
    const tasks = [...this.state.tasks];
    tasks.map(task => {
      if (task.id === id) task.completed = !task.completed;
      return task;
    });
    this.setState({ tasks });
  };

  setParent = id => {
    const tasks = [...this.state.tasks];
    const currentTasks = tasks.filter(task => task.parent === id);
    this.setState({ currentTasks });
  };

  componentDidUpdate() {
    const { taskId } = this.props.match.params;
    if (taskId && this.state.currentTasks.length === 0) {
      this.setParent(taskId);
    }
    if (
      this.props.location.pathname === "/" &&
      this.state.currentTasks.length > 0
    ) {
      this.setState({ currentTasks: [] });
    }
  }

  render() {
    const { pathname } = this.props.location;
    return (
      <div className="App">
        <Header title="Done!" />
        <TaskList
          tasks={
            pathname === "/" ? this.state.parentTasks : this.state.currentTasks
          }
          click={this.toggleCompleted}
          setParent={this.setParent}
          countChildren={this.countChildren}
        />
      </div>
    );
  }
}

export default App;
