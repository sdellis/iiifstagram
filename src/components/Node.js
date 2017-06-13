import React from 'react'
import * as actions from '../actions/actionCreators'

const Node = React.createClass({

  renderNode(node, i) {
    const thisNode = this.props.toc.entities.nodes[node];
    let item;
    if (thisNode.nodes.length > 0) {
      item = (
        <div className="nodeWithChildren">
          <input type="checkbox" id={thisNode.id} />
          <label className="tree_label" htmlFor={thisNode.id}>{thisNode.label}</label>
          <ul>
            {thisNode.nodes.map(this.renderNode)}
          </ul>
        </div>
      )
    } else {
      item = (
        <span className="tree_label">{thisNode.label}</span>
      )
    }
    return (
      <li className="node" key={thisNode.id}>
        { item }
      </li>
    )
  },

  render() {
    return (
      <div className="toc">
        <ul className="tree">
          {this.props.toc.entities.tree[0].nodes.map(this.renderNode)}
        </ul>
      </div>
    )
  }
})

export default Node
