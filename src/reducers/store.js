import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import auth from './auth.reducer'
import vehiclesdata from './vehicles.reducers'

const reducers = combineReducers({
    auth,
    vehiclesdata,
})

let middleware = []
if (process.env.NODE_ENV === 'development') {
    middleware = [...middleware, thunk, logger]
} else {
    middleware = [...middleware, thunk]
}

export const store = createStore(reducers, {}, applyMiddleware(...middleware))
