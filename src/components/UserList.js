import React from 'react';
import { connect } from 'react-redux';
import { getAllUsersAction } from '../actions/userActions';
import UserItem from './UserItem';

class UserList extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){//display all users when the component mounts
        this.props.getAllUsersAction()
    }

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

const mapDispatchToProps = {
    getAllUsersAction
}

export default connect(mapStateToProps , mapDispatchToProps )(UserList);