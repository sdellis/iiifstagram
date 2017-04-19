
function toc(state = [], action) {
  switch(action.type) {
    case 'TOGGLE_NODE' :
    // return updated state
      console.log('toggling node!!')
      let node = action.node
      node.active = true
      node.toggled = action.toggled

      // we need to update the state with the node that is toggled
      // best way to do this is with normalizr
      // but Treebeard expects data to look a certain way
      return Object.assign({}, state, node)

    default:
      return state;
  }
  //return state
}

export default toc
