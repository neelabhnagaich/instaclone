import {combineReducer} from 'redux'
import auth from './auth'
import post from './post'

export default combinereducer({
    auth,
    post
})