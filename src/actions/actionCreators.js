export const INCREMENT_TREE = 'INCREMENT_TREE'
export const CREATE_NODE = 'CREATE_NODE'
export const DELETE_NODE = 'DELETE_NODE'
export const ADD_CHILD = 'ADD_CHILD'
export const REMOVE_CHILD = 'REMOVE_CHILD'
// TOC stuff
export const incrementTree = (nodeId) => ({
  type: INCREMENT_TREE,
  nodeId
})

let nextId = 0
export const createNode = () => ({
  type: CREATE_NODE,
  nodeId: `new_${nextId++}`
})

export const deleteNode = (nodeId) => ({
  type: DELETE_NODE,
  nodeId
})

export const addChild = (nodeId, childId) => ({
  type: ADD_CHILD,
  nodeId,
  childId
})

export const removeChild = (nodeId, childId) => ({
  type: REMOVE_CHILD,
  nodeId,
  childId
})


// increment
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

// add comment
export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

// remove comment
export function removeComment(postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    i,
    postId
  }
}

// toggle tree node
export function toggleNode(node, toggled) {
  return {
    type: 'TOGGLE_NODE',
    toggled,
    node
  }
}
