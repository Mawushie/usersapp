import { getFirestore } from "redux-firestore"

export function addUserAction(user){
  return (dispatch, state, {getFirestore})=>{
    const db = getFirestore() //lets you have access to firestore
    db.collection("users")// creating a collection called users
    .add(user) //adds user to the collection
    //when successful, send action to reducer
    .then(()=>{
        dispatch({
            type: "ADD_USER",
            payload : user
        })
    })
    .catch((err)=>{
        console.log(err)
    })
  }
}

//action to get users from the database
export function getAllUsersAction(){
    return(dispatch, state, {getFirestore})=>{
    const db = getFirestore()
    db.collection("users")
    .get()
    //this gives you a snapshot of all the documents in the collection
    //you can give it any variable, which i have named results
    .then((results)=>{
        let usersindb = []//create an array to take all users from the database
            results.forEach((doc) =>{ //send each document to the users array
            usersindb.push(doc.data())
        })

        dispatch({ //now send the data to the reducer
            type: "GET_ALL_USERS",
            payload : usersindb
        })

    })
    .catch((err)=>{
        console.log(err)
    })
}
}


export function editUserAction(id, updatedUser){
    return{
        type: "EDIT_USER",
        payload: {
            id: id,
            updatedUserInfo: updatedUser
        }
    }
}

export function deleteUserAction(id) {
    return {
      type: 'DELETE_USER',
      payload: id,
    };
  }