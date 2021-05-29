import React from 'react';
import { connect } from 'react-redux';
import UserItem from './UserItem';


class UserList extends React.Component{
    render(){
        return (
            <div>
                <h2>User List</h2>
                {this.props.usersData.map((user) => {
                    return <UserItem  
                    user = {user} key={user.id} 
                    deleteUser = {this.props.deleteUser}
                    updateUser = {this.props.updateUser}/>;
                })}
            
            </div>
        )
    }
   
}

const mapStateToProps = (state) =>{
    return{
    usersData: state.users
}
}

export default connect(mapStateToProps)(UserList);