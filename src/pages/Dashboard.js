import React from 'react';
import { connect } from 'react-redux';
import { logOutAction } from '../actions/authActions';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';

class Dashboard extends React.Component{

  handleLogOut = () =>{
    this.props.logOutAction()
  }

  render(){
    return (
      <div>
        <div className = 'row text-right'  style ={{padding : 20}}>
          <button onClick = {this.handleLogOut}>Log Out</button>
        </div>
        
        <div className="row">
          <div className = "col-md-6 userinput">

            <UserForm /> 
          </div>
          
          <div className = "col-md-6 userlist">
            <UserList />   
          </div>
          
        </div>
      </div>
  
    );
  }

}

const mapDispatchToProps = {
  logOutAction
}
export default connect(null, mapDispatchToProps)(Dashboard);
