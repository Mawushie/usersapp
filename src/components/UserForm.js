import React from 'react';
class UserForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username: "",
            email: "",
            country: "",
            password: ""
        };
    }

    //this function takes the value of every change made on the input form
    handleOnChange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        }
        )
    }

    handleSubmit = () =>{
        this.props.addUser(this.state);
    }

    render(){
      return(
          <div >
            <form>
                <label>Username</label> <br></br>
                <input type ="text" name ="username" onChange = {this.handleOnChange} value = {this.state.username}></input>  <br></br>

                <label>Email</label> <br></br>
                <input type ="text" name ="email" onChange = {this.handleOnChange} value = {this.state.email}></input> <br></br>

                <label>Country</label> <br></br>
                <input type ="text" name ="country" onChange = {this.handleOnChange} value = {this.state.country}></input><br></br>

                <label>Password</label> <br></br>
                <input type ="password" name ="password" onChange = {this.handleOnChange} value = {this.state.password}></input>
                
                <br></br> <br></br>

                <button type="button" onClick = {this.handleSubmit}>Create User</button>
            </form>

          </div>
      );
    }
}

export default UserForm;