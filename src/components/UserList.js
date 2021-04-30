import React from 'react';
import UserItem from './UserItem';

class UserList extends React.Component{
    render(){
        return(
            <div>
                {this.props.users.map((user) => {
                    return <UserItem  user = {user}/>;
                })}
               
            </div>
        );
    }
}

export default UserList;