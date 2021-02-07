import auth from '@react-native-firebase/auth'
import Snackbar from 'react-native-snackbar'
import database from '@react-native-firebase/database'


export const signUp = (data) => async (dispatch)=>{
    console.log(data);
    const {name,instaUserName,bio,email,password,country,image} = data
    auth.createUserWithemailAndPassword(email,password)
    .then()
    .catch((error)=>{
        console.log(error);
        Snackbar.show({
            text: "signup failed",
            textColor: 'white',
            backgroundColor: 'red'
        })
    })

}