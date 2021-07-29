import auth from '@react-native-firebase/auth'
import Snackbar from 'react-native-snackbar'
import database from '@react-native-firebase/database'


// the user is created and signed in and also details ar sotred in db
export const signUp = (data) => async (dispatch)=>{
    console.log("DATA",data);
    const {name,instaUserName,bio,email,password,country,image} = data
    auth().createUserWithEmailAndPassword(email,password)
    .then((data)=>{
        console.log(data);
        console.log("User creation was successful");

        // setting user in database using  firebase
        database()
        .ref('/users/'+ data.user.uid)
        .set({
            name,
            instaUserName,
            country,
            image,
            bio,
            uid: data.user.uid
        })
        .then(()=> console.log("Data set success"))

        Snackbar.show({
            text:'account created',
            textColor:'white',
            backgroundColor:'#1b262c'
        })
    })
    .catch((error)=>{
        console.log(error);
        Snackbar.show({
            text: "signup failed",
            textColor: 'white',
            backgroundColor: 'red'
        })
        // here we are using snackbar to display error 
        // else we were using dispatch to feed this error where it occured
    })

}

export const signIn = (data) => async (dispatch)=>{
    console.log(data);
    const {email,password} = data

    auth()
    .signInWithEmailAndPassword(email,password)
    .then(()=>{
        console.log("Sign in success");
        Snackbar.show({
            text:'account signin',
            textColor:'white',
            backgroundColor:'#1b262c'
        })
    })
    .catch((error)=>{
        console.error(error);
        Snackbar.show({
            text:'Sign in failed',
            textColor:'white',
            backgroundColor:'red'
        })
    })
}

export const signout = () => async (dispatch)=>{
    auth()
    .signOut()
    .then(()=>{
       
        Snackbar.show({
            text:'Sign out success',
            textColor:'white',
            backgroundColor:'red'
        })
    })
    .catch((error)=>{
        console.error(error);
        Snackbar.show({
            text:'Signout failed',
            textColor:'white',
            backgroundColor:'red'
        })
    })
}