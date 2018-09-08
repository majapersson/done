import React, { Component } from "react";
import Header from "./components/Header.js";
import TaskList from "./components/TaskList.js";
import "./App.css";

class App extends Component {
  state = {
    tasks: this.props.tasks,
    tasksToShow: []
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

  setTasks = (id = null) => {
    const tasks = [...this.state.tasks];
    let tasksToShow;

    if (id) {
      tasksToShow = tasks.filter(task => task.parent === id);
    } else {
      tasksToShow = tasks.filter(task => !task.parent);
    }

    const currentTaskIds = JSON.stringify(
      this.state.tasksToShow.map(task => task.id)
    );
    const nextTaskIds = JSON.stringify(tasksToShow.map(task => task.id));
    if (currentTaskIds === nextTaskIds) return;

    this.setState({ tasksToShow });
  };

  componentWillMount() {
    this.componentDidUpdate();
  }

  componentDidUpdate() {
    const { taskId } = this.props.match.params;
    if (taskId) {
      this.setTasks(taskId);
    } else {
      this.setTasks();
    }
  }

  render() {
    const { pathname } = this.props.location;
    return (
      <div className="App">
        <Header
          title="Done!"
          location={pathname}
          goBack={this.props.history.goBack}
        />
        <TaskList
          tasks={this.state.tasksToShow}
          click={this.toggleCompleted}
          countChildren={this.countChildren}
        />
      </div>
    );
  }
}

export default App;
