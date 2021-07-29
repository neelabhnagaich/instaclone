
import React,{useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import database  from '@react-native-firebase/database';
import { useDispatch,connect } from 'react-redux';

import AddPost from './screens/AddPost';
import Signin from './screens/Signin';
import Signup from './screens/Signup';
import Home from './screens/Home';
import CustomeHeader from './layout/CustomeHeader';
import EmptyContainer from './components/EmptyContainer';

import {SET_USER, IS_AUTHENTICATED} from './action/action.types'
import { requestPermission } from './utils/AskPermissions';





const Stack = createStackNavigator();

const App = ({authState}) => {
    const dispatch = useDispatch()

    const onAuthStateChanged = (user)=>{
        if(user){
            dispatch({
                type: IS_AUTHENTICATED,
                payload: true
            })
            console.log(user._user.uid)
            database()
            .ref(`/users/${user._user.uid}`)
            .on('value',(snapshot)=>{
                console.log('USER DETAILS', snapshot.val())
                dispatch({
                    type: SET_USER,
                    payload:snapshot.val()
                })
            })

        } else{
            dispatch({
                type: IS_AUTHENTICATED,
                payload: false
            })
        }
    }

    useEffect(()=>{
        requestPermission();
        const unsubscribe = auth().onAuthStateChanged(onAuthStateChanged) 
        return unsubscribe // unsubsribe and return
    },[])

    if(authState.loading){
        return <EmptyContainer />
    }

    return (
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
                header: (props)=>(<CustomeHeader {...props} />)
            }}
            >
                {authState.isAuthenticated ? (
                <> 
                    <Stack.Screen name ="Home" component={Home} />
                    <Stack.Screen name ="AddPost" component={AddPost} />

                </>
                ) : 
                (<> 
                    <Stack.Screen name ="Signup" component={Signup} />
                    <Stack.Screen name ="Signin" component={Signin} />
                    
                </>
                ) }


            </Stack.Navigator>
            
        </NavigationContainer>
    )
}

const mapStateToProps= (state)=>({
    authState : state.auth
})


export default connect(mapStateToProps)(App)