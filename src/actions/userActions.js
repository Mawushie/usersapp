export function addUserAction(user){
    return {
    type: "ADD_USER",
    payload: user
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