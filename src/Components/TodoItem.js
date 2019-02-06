import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: 'lightgrey',
            color: 'teal',
            padding: '10px',
            borderBottom: '8px salmon dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }



  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
        { title }
        <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>~X~</button>
        </p>
      </div>
    )
  }
}


TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
  } 

  const btnStyle = {
      background: 'salmon',
      color: 'white',
      border: 'none',
      padding: '5px 10px',
      borderRadius: '50%',
      cursor: 'pointer',
      float: 'right'
  }



export default TodoItem
