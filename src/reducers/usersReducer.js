let initialState = {
    users :[{
        name: "Mawushie",
        age: 27,
        gender: "female"
    }]
}

const usersReducer = (state = initialState, action)=>{
     switch(action.type){
        case "add_User":

        break;

        default:
            return state;
     }
}

export default usersReducer;