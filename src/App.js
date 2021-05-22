import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import React from 'react';


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      users : [] //setting up an empty array here so that the users can be updated here
    }
  }

  // addUser = (user) => {
  //   this.setState({
  //     users :[...this.state.users, user]
  //   })
  // }
  render(){
    return (
      <div className="row" style ={{marginLeft : 20 , marginTop : 20}}>
  
        <div className="col-md-6"> 
          <UserForm />
        </div>
  
        <div className="col-md-6"> 
          <UserList users = {this.state.users}/>
        </div>
       
      </div>
    )
  }
}

export default App;
