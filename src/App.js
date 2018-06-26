import React, { Component } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Done!"/>
        <ToDoList />
      </div>
    );
  }
}

export default App;
