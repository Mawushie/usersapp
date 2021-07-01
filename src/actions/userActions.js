import { getFirestore } from "redux-firestore"

export function addUserAction(user){
  return async (dispatch, state, {getFirestore})=>{
    const db = getFirestore() //lets you have access to firestore
    try{
        await db.collection('users').add(user)
    }
    catch(error){
        console.log(error)
    }
  }
}

//action to get users from the database
export function getAllUsersAction(){
    return(dispatch, state, {getFirestore})=>{
    const db = getFirestore()
    //calling a listener on this action because it is what shows the list of users
    //in our app. onSnapshot listens to any changes in the firestore and immediately
    //updates the getusers action. Hence no need for manual dispatch to reducer
    //then we don't need to create call .then or .get manually. It automatically updates action
    //that displays the users
    db.collection("users").onSnapshot(
        (results)=>{
            let usersindb = []//create an array to take all users from the database
                results.forEach((doc) =>{ //send each document to the users array
                let user = doc.data() //user variable to store each document data
                user.id = doc.id //giving each user and id property
                usersindb.push(user)
            })
    
            dispatch({ //now send the data to the reducer
                type: "GET_ALL_USERS",
                payload : usersindb
            })
    
        },(err)=>{
            console.log(err)
        }
    )
   }
}

export function editUserAction(id, updatedUser){
    //using async await 
    return async (dispatch , state, {getFirestore}) =>{
        let db = getFirestore();
        try {
            await db.collection('users').doc(id).update(updatedUser)
        } 
        catch (error) {
            console.log(error)
        }
    }
}     


export function deleteUserAction(id) {
    return async (dispatch , state , {getFirestore}) =>{
        let db = getFirestore();
        try {
            await db.collection('users').doc(id).delete()
        } 
        catch (error) {
            console.log(error)
        }
    }
}