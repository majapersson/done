import React, { Component } from 'react';
import Task from '../Task';
import todos from '../../tasks.json';


class ToDoList extends Component {

  render() {
    return (
      <section className="TodoList">
        {
          todos.map((todo, i) => (
              <Task key={i} task={todo} />
          ))
        }
      </section>
    );
  }

}

export default ToDoList;
