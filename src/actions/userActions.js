export function addUser(user){
    return {
    type: "ADD_USER",
    payload: user
}
}

export function editUser(id, updatedUser){
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