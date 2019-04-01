import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

const propTypes = {
    todos: PropTypes.array.isRequired
}

class TodoList extends Component {
    render(){
        //all js in render but before return
        //console.log(this.props.todos)
        return this.props.todos.map((todo) => (
            <TodoItem key={todo.id} todo = {todo} />
        ));
    }
}

TodoList.propTypes = propTypes;

export default TodoList;