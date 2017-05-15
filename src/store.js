import { createStore, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
import mixins from './manifesto-react-mixins'

// import the root reducer
import rootReducer from './reducers/index'

import comments from './data/comments'
//import toc from './data/toc'
import generateTree from './generateTree'
const toc = generateTree()
//import posts from './data/posts'
import manifests from './data/manifests'
import manifesto from '../node_modules/manifesto.js/dist/server/manifesto.js'

const m = manifesto.create(JSON.stringify(manifests[0]))
// lets mix in some convenience methods into manifesto's instance
window.manifestation = Object.assign( m, mixins )
const posts = window.manifestation.posts()

// create an object for the default data
const defaultState = {
  posts,
  comments,
  toc
}

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(rootReducer, defaultState, enhancers)

export const history = syncHistoryWithStore(browserHistory, store)
export const manifestation = window.manifestation;

if(module.hot) {
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers/index').default
    store.replaceReducer(nextRootReducer)
  })
}

export default store
