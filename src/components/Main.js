import React from 'react'
import { Link } from 'react-router'
import Node from './Node'

const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">IIIFstagram</Link>
        </h1>
        <Node id={0} {...this.props} />
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
})

export default Main;
