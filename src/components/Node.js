import React from 'react'
import { Component } from 'react'
import * as actions from '../actions/actionCreators'

export class Node extends Component {
  handleIncrementClick = () => {
    const { incrementTree } = this.props
    const { id } = this.props.toc
    incrementTree(id)
  }

  handleAddChildClick = e => {
    e.preventDefault()
    const { addChild, createNode } = this.props
    const { id } = this.props.toc
    const childId = createNode().nodeId
    addChild(id, childId)
  }

  handleRemoveClick = e => {
    e.preventDefault()

    const { removeChild, deleteNode } = this.props
    const { parentId, id } = this.props.toc
    removeChild(parentId, id)
    deleteNode(id)
  }

  renderChild = childId => {
    const { id } = this.props.toc
    return (
      <li key={childId}>
        <Node id={childId} parentId={id} />
      </li>
    )
  }

  render() {
    const { counter, parentId, childIds } = this.props.toc
    console.log(this.props)
    return (
      <div>
        Counter: {counter}
        {' '}
        <button onClick={this.handleIncrementClick}>
          +
        </button>
        {' '}
        {typeof parentId !== 'undefined' &&
          <a href="#" onClick={this.handleRemoveClick}
             style={{ color: 'lightgray', textDecoration: 'none' }}>
            ×
          </a>
        }
        <ul>
          {childIds.map(this.renderChild)}
          <li key="add">
            <a href="#" onClick={this.handleAddChildClick}>
              Add child
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Node
