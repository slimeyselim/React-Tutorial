//rce => tab to generate component
import React, { Component } from 'react'
import PropTypes from 'prop-types';


//props
const propTypes = {
    todo: PropTypes.object.isRequired
}

//variables
/* 2. const itemStyle = {
    backgroundColor: 'yellow'
}
*/

export class TodoItem extends Component {
    getStyle = () => {
        return {
            backgroundColor: 'yellow',
            textDecoration: this.props.todo.achieved ? 'line-through' : 'none'
        }
    } 
  
    render() {
    return (
      //<div style = {{ backgroundColor : 'yellow'}}>
      // 2.<div style = {itemStyle}>
      <div style={this.getStyle()}>
        <p>{this.props.todo.id} - {this.props.todo.name}</p>
      </div>
    )
  }
}

TodoItem.propTypes = propTypes;

export default TodoItem
