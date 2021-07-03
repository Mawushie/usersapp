import React from 'react';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';



class Dashboard extends React.Component{

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
export default Dashboard;
