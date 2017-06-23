import React from 'react'

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
    const { app } = this.props
    return (
      <div id="slideout" className={this.props.app.toc_visible ? 'toc on' : 'toc'}>
        <button onClick={this.props.toggleTOC.bind(null, app.toc_visible)} className="closebtn">&#9776;</button>
        <ul className="tree">
          {this.props.toc.entities.tree[0].nodes.map(this.renderNode)}
        </ul>
      </div>
    )
  }
})

export default Node
