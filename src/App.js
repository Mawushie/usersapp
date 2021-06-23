import logo from './logo.svg';
import './App.css';
import React from 'react';
import UserForm from './components/UserForm';
import UserItem from './components/UserItem';
import UserList from './components/UserList';
import EditUserForm from './components/EditUserForm';

class App extends React.Component{

  render(){
    return (
      <div className="row">
        <div className = "col-md-6 userinput">

          <UserForm /> 
        </div>
        
        <div className = "col-md-6 userlist">
          <UserList />   
        </div>
        
      </div>
  
    );
  }

}
export default App;
