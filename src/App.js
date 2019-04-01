import React, { Component } from 'react';
import './App.css';

import TodoList from './Todo/TodoList';

class App extends Component {
  //state is a JS Object
  state = {
    todos:[
      { 
        id:1,
        name:"skidmark",
        achieved: false
      },
      { 
        id:2,
        name:"splatter",
        achieved: false
      },
      { 
        id:3,
        name:"bombsite",
        achieved: true
      },
    ]
  }

    deleteTodo = (id) => {
      //to update use setState
      this.setState({
        //[3 dots is the spread operator
        todos: [...this.state.todos.filter(todo => 
          todo.id !== id)]
      })
    }

    //events take a parameter
    //custom method doesnt have access to this unless bind and dont use arrow
    //using arrow here
    //because have destructed can access id and name of what passed up
    markAchieved = (id) => {
      //to update use setState
      this.setState({

        todos: this.state.todos.map(todo => {
          if(todo.id === id){
            todo.achieved = !todo.achieved;
          }
          return todo;
        })
      })
    }

  render() {
    return (
      <div className="App">
        <TodoList deleteTodo={this.deleteTodo} todos={this.state.todos} markAchieved={this.markAchieved} />
      </div>
    );
  }
}

export default App;
