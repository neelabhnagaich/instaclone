import React from 'react'
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
