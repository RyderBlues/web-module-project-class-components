import { getByTitle } from '@testing-library/dom';
import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Task.css';

const toDoList = [];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDoList: toDoList
    };
  };

  addTask = (input) => {
    const newTask = {
      task: input,
      id: this.state.toDoList.length,
      completed: false
    };

    this.setState({
      toDoList: [...this.state.toDoList, newTask]
    });
  }

  toggleTask = (id) => {
    const newTask = this.state.toDoList.map(task => {
      if (task.id === id) {
        return {
          ...task, completed: !task.completed
        }
      } else {
        return (task);
      }
    });

    this.setState({
      toDoList: newTask
    })
  }

  clearCompleted = () => {
    const newTasks = this.state.toDoList.filter(task => {
      return(task.completed === false);
    });

    this.setState({
      toDoList: newTasks
    })
  }


  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>To-Do List:</h2>
        <TodoForm addTask={this.addTask} />
        <TodoList toDoList={this.state.toDoList} toggleTask={this.toggleTask} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}
export default App;
