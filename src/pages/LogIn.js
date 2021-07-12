import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { logInAction } from '../actions/authActions'

class LogIn extends Component {
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
        this.props.logInAction(this.state.email, this.state.password)
        this.setState({
            email : '',
            password : ''
        })
    }

    

    render() {
        //take signed in users to the dashboard when they are logged in
        //firebase has auth properties on a signed in user  
        if(this.props.auth.isLoaded === false){
            return <h2>Loading...</h2>
        }
        
        if(this.props.auth.isEmpty === false){
            return <Redirect to = '/dashboard' />
        }
        return (
            <div>
               <h1 className ='text-center'>Log In</h1> 

               <form>
                    <label>Email</label> <br></br>
                    <input type = 'text' name = 'email' value = {this.state.email} onChange = {this.handleOnChange}/> 
                    <br></br><br></br>

                    <label>Password</label> <br></br>
                    <input type = 'password' name = 'password' value = {this.state.password} onChange = {this.handleOnChange} />

                    <br></br><br></br>

                   <button type = 'button' onClick = {this.handleOnSubmit} >Log In</button>
               </form>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
    auth : state.firebaseState.auth
    }
}

const mapDispatchToProps = {
    logInAction
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)


