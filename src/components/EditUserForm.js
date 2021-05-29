import React from 'react';
import { connect } from 'react-redux';
import { editUser, editUserAction } from '../actions/userActions';


class EditUserForm extends React.Component{
    constructor(props){
        super(props)

        //autofill the edit form with the info saved already
        this.state = {
            username : this.props.user.username,
            email : this.props.user.email,
            country : this.props.user.country,
            password : this.props.user.password
        };
    }
    //set the value of what is typed by user into the state
    handleOnChange = (event) => {
        this.setState(
           { [event.target.name] : event.target.value} //gets the value for whatever was typed and puts it in the respective inputs
        )
    }

    handleSubmit = () => {
        let user = {...this.state, id: this.props.user.id}
        this.props.editUser(this.props.user.id, user);
        this.props.closeModal();
    }

    render(){
        return (
            <div>
                <form>
                    <label>Username</label> <br></br>
                    <input type = "text" name = "username" value = {this.state.username} onChange = {this.handleOnChange}></input> <br></br>

                    <label>Email</label> <br></br>
                    <input type = "text" name = "email" value = {this.state.email} onChange = {this.handleOnChange}></input> <br></br>

                    <label>Country</label> <br></br>
                    <input type = "text" name = "country" value = {this.state.country} onChange = {this.handleOnChange}></input> <br></br>

                    <label>Password</label> <br></br>
                    <input type = "password" name = "password" value = {this.state.password} onChange = {this.handleOnChange}></input> <br></br>

                    <br></br>
                
                    <button type="button" onClick = {this.handleSubmit}>Update</button>

                </form>
            </div>
        )
    }
    //When we click Create User, we want the information typed to be passed into the users Array 
    //the initial state is empty but when we fill the form, the setState is called and the 
    //states are updated accordingly
    //Now since we want the data to be passed pass the data into the users array, we have to give
    //the addUser function as props to the UserForm component(way to link them)
    //in this case, our handleSubmit function is doing that and the onclick called on the function 
    //also calls the handleSubmit
}

var mapDispatchToProps = {
    editUser : editUserAction
}

export default connect(null, mapDispatchToProps)(EditUserForm);