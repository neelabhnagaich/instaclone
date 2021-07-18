<<<<<<< HEAD
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducer'
import thunk from 'redux-thunk'
const middleware  = [thunk]
=======
import {applyMiddleware, createStore} from 'redux'
import rootReducer from './reducer'
import thunk from 'redux-thunk'
const middleware = [thunk]
>>>>>>> Store created

import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(
    rootReducer,
<<<<<<< HEAD
    composeWithDevTools(applyMiddleware(...middleware))
=======
    composeWithDevTools(applyMiddleware(...applyMiddleware))
>>>>>>> Store created
)

export default store