import { getFirestore } from "redux-firestore"

export function addUserAction(user){
  return (dispatch, state, {getFirestore})=>{
    const db = getFirestore()
    db.collection("users")
    .add(user)
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
    //you can give it any variable
    .then((results)=>{
        let usersindb = []//create an array to take all users from the database
            results.forEach((doc) =>{ //send each document to the users array
            usersindb.push(doc.data())
        })

        dispatch({ //now send the data to the reducer
            type: "ADD_ALL_USERS",
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