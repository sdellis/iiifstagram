import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import posts from './posts'
import comments from './comments'
import toc from './toc'
import app from './app'

const rootReducer = combineReducers({posts, comments, toc, app, routing: routerReducer })

export default rootReducer
