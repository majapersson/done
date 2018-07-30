import React, { Component } from "react";
import Header from "./components/Header.js";
import TaskList from "./components/TaskList.js";
import "./App.css";

class App extends Component {
  state = {
    tasks: this.props.tasks
  };

  toggleCompleted = i => {
    const tasks = [...this.state.tasks];
    tasks[i].completed = !tasks[i].completed;
    this.setState({ tasks });
  };

  render() {
    return (
      <div className="App">
        <Header title="Done!" />
        <TaskList tasks={this.state.tasks} click={this.toggleCompleted} />
      </div>
    );
  }
}

export default App;
