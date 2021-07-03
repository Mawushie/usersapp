import { getFirebase } from "react-redux-firebase";

export function signUpAction(email,password){
   return async(dispatch, state, {getFirebase}) =>{
       const firebase = getFirebase()
       try {
        const userCredentials = await firebase.auth().createUserWithEmailAndPassword(email, password)
        console.log(userCredentials)
       } 
       catch (error) {
        console.log(error)  
       }
   }
}

export function logInAction(email,password){
    return async(dispatch, state, {getFirebase}) =>{
        const firebase = getFirebase()
        try {
         const userCredentials = await firebase.auth().signInWithEmailAndPassword(email, password)
         console.log(userCredentials)
        } 
        catch (error) {
         console.log(error)  
        }
    }
 }