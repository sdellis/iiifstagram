import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import posts from './posts'
import comments from './comments'
import toc from './toc'

const rootReducer = combineReducers({posts, comments, toc, routing: routerReducer })

export default rootReducer
