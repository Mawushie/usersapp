import React from 'react';
import { connect } from 'react-redux';
import UserItem from './UserItem';


class UserList extends React.Component{
    render(){
        console.log(this.props.usersData)
        return(
            <div>
                {this.props.usersData.map((user) => {
                    return <UserItem  user = {user}/>;
                })}
               
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
    usersData: state.users
}
}

export default connect(mapStateToProps)(UserList);