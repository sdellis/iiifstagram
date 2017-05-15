import React from 'react'
import Photo from './Photo'
import Node from './Node'
// import {Treebeard} from 'react-treebeard'

const PhotoGrid = React.createClass({
    onToggle(node, toggled){
        // if(this.props.toc.cursor){this.props.toc.cursor.active = false;}
        // node.active = true;
        // if(node.children){ node.toggled = toggled; }
        // console.log("toggled!")

        this.props.toggleNode(node, toggled)
        //this.setState({ cursor: node });
    },
  render() {
    console.log(this.props)
    return (
      <div className="container">
        <div className="sidebar">
          <Node data={this.props} />
        </div>
        <div className="photo-grid">
          {this.props.posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post} />)}
        </div>
      </div>
    )
  }
})

export default PhotoGrid;
