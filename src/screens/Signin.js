import React,{useState} from 'react'
import { StyleSheet, ScrollView,Image,TouchableOpacity } from 'react-native'
import {
    Container,
    Form,
    Item,
    Input,
    Text,
    Button,
    H3
} from 'native-base'

import { connect } from 'react-redux';
import {signIn} from '../action/auth'
import propTypes from 'prop-types';

import Welcome from '../assets/Welcome.png'

const Signin = ({navigation,signIn}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState('')

    const doSignIn = ()=>{
        signIn({email,password})

    }
    return (
        <Container style = {styles.container}>
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
                <H3 style={styles.heading}>Welcome to the Travel-gram Social App</H3>
                <Image 
                    source = {Welcome}
                    style={{width:null,height:150,marginTop:30}}
                    resizeMode='contain'
                />

                <Form>
                    <Item rounded style={styles.formItem}>
                        <Input 
                            placeholder="Enter the email"
                            value={email}
                            style = {{color:'#eee'}}
                            onChangeText={(text)=> setEmail(text)}
                        
                        />
                    </Item>
                    <Item rounded style={styles.formItem}>
                        <Input 
                            placeholder="Enter your password"
                            value={password}
                            secureTextEntry = {true}
                            style = {{color:'#eee'}}
                            onChangeText={(text)=> setPassword(text)}
                        />
                    </Item>
                    <Button  style={styles.formItem} rounded block onPress={doSignIn}>
                        <Text>SignIn</Text>
                    </Button>

                    <TouchableOpacity
                        onPress={()=> navigation.navigate('Signup')}
                        style={{marginTop:10}}
                    >
                        <Text style={{color: '#fff', textAlign: 'center'}}>Do not have an account, SignUp here</Text>
                    </TouchableOpacity>
                </Form>
            </ScrollView>
         
        </Container>
    )
}

const mapDispatchToProps = {
    signIn: (data)=> signIn(data)
}

Signin.propTypes = {
    signIn : propTypes.func.isRequired
}

export default connect(null,mapDispatchToProps)(Signin)

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#1b262c',
        flex: 1,
        justifyContent: 'flex-start'
    },
    heading: {
        textAlign: 'center',
        color: '#fdcb9e',
        marginHorizontal: 5,
        marginTop: 30,
      },
      formItem: {
        marginBottom: 20,
        marginLeft:10,
        marginRight:10
      },

})
