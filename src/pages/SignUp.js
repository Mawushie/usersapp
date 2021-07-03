import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signUpAction } from '../actions/authActions'

class SignUp extends Component {
    constructor(props){
        super(props)
        this.state={
            email : '',
            password : ''
        }
    }

    handleOnChange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleOnSubmit = () =>{
        this.props.signUpAction(this.state.email, this.state.password)
        this.setState({
            email : '',
            password : ''
        })
    }

    render() {
        return (
            <div>
               <h1 className ='text-center'>Sign Up</h1> 

               <form>
                    <label>Email</label> <br></br>
                    <input type = 'text' name = 'email' value = {this.state.email} onChange = {this.handleOnChange}/> 
                    <br></br><br></br>

                    <label>Password</label> <br></br>
                    <input type = 'password' name = 'password' value = {this.state.password} onChange = {this.handleOnChange} />

                    <br></br><br></br>

                   <button type = 'button' onClick = {this.handleOnSubmit} >Sign Up</button>
               </form>
            </div>
        )
    }
}

const mapDispatchToProps = {
    signUpAction
}

export default connect(null, mapDispatchToProps)(SignUp)
