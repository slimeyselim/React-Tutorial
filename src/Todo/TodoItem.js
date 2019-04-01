//rce => tab to generate component
import React, { Component } from 'react'
import PropTypes from 'prop-types';


//props
const propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background : 'red',
    color : 'white',
    border : 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
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
            lineHeight: '25px',
            margin: '40px',
            textDecoration: this.props.todo.achieved ? 'line-through' : 'none'
        }
    } 

    render() {
        //DESTRUCTURING happens in render before return
        const { id, name, achieved } = this.props.todo;
        //now can use just id and name instead of this.props.todo
        // {this.props.todo.id} - {this.props.todo.name}</p>
        return (
        //<div style = {{ backgroundColor : 'yellow'}}>
        // 2.<div style = {itemStyle}>
        //need event to update checkbox
        <div style={this.getStyle()}>
            <p>
            <input type="checkbox" checked={achieved} onChange={this.props.markAchieved.bind(this, id)}/>
            {id} - {name}
            <button style={btnStyle} onClick={this.props.deleteTodo.bind(this, id)}>x</button>
            </p>
        </div>
        )
  }
}

TodoItem.propTypes = propTypes;

export default TodoItem
