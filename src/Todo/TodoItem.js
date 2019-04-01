//rce => tab to generate component
import React, { Component } from 'react'
import PropTypes from 'prop-types';


//props
const propTypes = {
    todo: PropTypes.object.isRequired
}

//variables
const itemStyle = {
    backgroundColor: 'yellow'
}

export class TodoItem extends Component {
  render() {
    return (
      //<div style = {{ backgroundColor : 'yellow'}}>
      <div style = {itemStyle}>
        <p>{this.props.todo.id} - {this.props.todo.name}</p>
      </div>
    )
  }
}

TodoItem.propTypes = propTypes;

export default TodoItem
