import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

const propTypes = {
    todos: PropTypes.array.isRequired
}

class TodoList extends Component {

    //see passing the prop all the way up. think i did do like this
    //in angular...

    render(){
        //all js in render but before return
        //console.log(this.props.todos)
        return this.props.todos.map((todo) => (
            <TodoItem deleteTodo = {this.props.deleteTodo} key={todo.id} markAchieved = {this.props.markAchieved} todo = {todo}  />
        ));
    }
}

TodoList.propTypes = propTypes;

export default TodoList;