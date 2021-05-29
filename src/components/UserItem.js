import React from "react";
import {Modal} from 'react-bootstrap';
import { connect } from "react-redux";
import { deleteUserAction } from "../actions/userActions";
import EditUserForm from './EditUserForm';



class UserItem extends React.Component{
    constructor(props){  
        super(props)
        this.state = {
            show : false
        };
    }

    handleDelete = () => {
        this.props.deleteUserAction(this.props.user.id); 
    }

    closeModal = () =>{
        this.setState(
           {show : false}
        )
    }
    showModal = () =>{
        this.setState(
            {show : true}
        )
    }
    render(){
        return(
            <div className = "row text-center">
            <div className = "col-md-2">
               {<h4>Username</h4>} {this.props.user.username}
            </div>

            <div className = "col-md-5">
                {<h4>Email</h4>}{this.props.user.email}
            </div>

            <div className = "col-md-2">
                {<h4>Country</h4>}{this.props.user.country}
            </div>

            <div className = "col-md-3">
                {<h4>Action</h4>}
                <button className = "btn btn-success"  onClick = {this.showModal}>Edit</button>
            
                <Modal show={this.state.show} onHide={this.closeModal}>
                  <Modal.Header closeButton>
                      <Modal.Title>Edit User Form </Modal.Title>
                  </Modal.Header>

                  <Modal.Body >
                    <EditUserForm
                    user = {this.props.user}
                    closeModal = {this.closeModal}/>
                  </Modal.Body>
                </Modal>



                <button className = "btn btn-danger" onClick = {this.handleDelete} >Delete</button>
            </div>

        </div>
        )
    }
}

var mapDispatchToProps = {
    deleteUserAction : deleteUserAction
}

export default connect(null, mapDispatchToProps)(UserItem);