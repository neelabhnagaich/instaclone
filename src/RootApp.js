import React from 'react'
<<<<<<< HEAD
import { StyleSheet, Text, View } from 'react-native'
import App from './App';
import {Provider} from 'react-redux'
import store from './store'



const RootApp = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

export default RootApp

const styles = StyleSheet.create({})
=======
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
>>>>>>> Store created
