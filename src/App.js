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

  returnChildren = id => {
    return this.props.tasks.filter(task => task.parent === id).length;
  };

  toggleCompleted = task => {
    const tasks = [...this.state.tasks];
    tasks.map(mapTask => {
      if (mapTask.id === task.id) mapTask.completed = !mapTask.completed;
      return mapTask;
    });
    this.setState({ tasks });
  };

  setParent = task => {
    const tasks = [...this.state.tasks];
    const currentTasks = tasks.filter(
      filterTask => filterTask.parent === task.id
    );
    this.setState({ currentTasks });
    this.props.history.push(task.id);
  };

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
          returnChildren={this.returnChildren}
        />
      </div>
    );
  }
}

export default App;
