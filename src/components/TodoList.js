import React from 'react';
import Task from './Task';


const TodoList = props => {
    
    const handleClick = () => {
      props.clearCompleted();
    }

    return (
      <div>
        <button onClick={handleClick}>Clear Completed</button>
        {props.toDoList.map(task => (
          <Task key={task.id} toggleTask={props.toggleTask} task={task} />
        ))}
      </div>
    )
}

export default TodoList;