import React from 'react'
import Photo from './Photo'
import {Treebeard} from 'react-treebeard'

const PhotoGrid = React.createClass({
    // onToggle(node, toggled){
    //     if(this.props.toc.cursor){this.props.toc.cursor.active = false;}
    //     node.active = true;
    //     if(node.children){ node.toggled = toggled; }
    //
    //     //this.setState({ cursor: node });
    // },
  render() {
    return (
      <div className="container">
        <div className="sidebar">
          <Treebeard data={this.props.toc} onToggle={this.onToggle} />
        </div>
        <div className="photo-grid">
          {this.props.posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post} />)}
        </div>
      </div>
    )
  }
})

export default PhotoGrid;
