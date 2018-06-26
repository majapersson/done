import React from 'react';
import './index.css'

const Task = (props) => {
  return (
    <article className="Task">
      <div className="Task__title">
        { props.task.title }
      </div>
      { props.task.children.length > 0 ?
        <div className="Task__children">
          { props.task.children.length }
        </div>
        : ''
      }
    </article>
  )
}

export default Task;
