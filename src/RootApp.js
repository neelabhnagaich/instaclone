import React from 'react'
import store from './store'
import {Provide} from 'react-redux'

import App from './App'

const RootApp = ()=>{
    return(
        <Provider store = {store}>
            <App />
        </Provider>
    )

}

export default RootApp