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

  render() {
    return (
      <div className="App">
        <TodoList todos = {this.state.todos} />
      </div>
    );
  }
}

export default App;
