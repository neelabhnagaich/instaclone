import React from 'react'
import { StyleSheet, View } from 'react-native'
import {
    Body,
    Right,
    Button,
    Icon,
    Title,
    Text,
    Header
} from 'native-base'

import {connect} from 'react-redux'
import propTypes from 'prop-types'
import {signout} from '../action/auth'

const CustomeHeader = ({authState,signout,navigation}) => {
    return (
        <Header
         androidStatusBarColor="#0f4c75"
         style={{
             backgroundColor:"#0f4c75"
         }}
        >
            <Body>Social App</Body>
            <Right>
                {authState.isAuthenticated && (
                    <>
                    <Button
                        transparent
                        iconLeft
                        onPress={()=>{navigation.navigate('AddPost')}}
                    >
                        <Text style={{color:"#fdcb9e"}}>Add Post</Text>
                    </Button>
                    <Button
                        transparent
                        iconLeft
                        onPress={()=>{signout()}}
                    >
                        <Icon name="log-out-outline" style={{color:"red"}}></Icon>
                    </Button>
                    </>
                )}
            </Right>
        </Header>
    )
}

const mapStateToProps = (state)=>{
    authstate:state.auth
}

const mapDispathToProps = {
    signout
}

CustomeHeader.prototypes={
    signout: propTypes.func.isRequired,
    authState:propTypes.object.isRequired
}


export default connect(mapStateToProps,mapDispathToProps)(CustomeHeader)

const styles = StyleSheet.create({})
