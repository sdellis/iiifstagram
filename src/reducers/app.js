function toggleToc(state = [], action) {
  switch(action.type) {
    case 'TOGGLE_TOC' :
      return { ...state, toc_visible: !action.toc_visible }
    default:
      return state;
  }
}

export default toggleToc
