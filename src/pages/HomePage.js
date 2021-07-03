import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class HomePage extends Component {
    render() {
        return (
            <div className = 'container'>
                <div className = 'row text-center'>
                    <h1>Welcome</h1>
                </div>

                <div className = 'row'>
                    <div className = 'col-md-6'>
                        <Link to = '/signup'> <h3>Sign Up</h3></Link>
                    </div>

                    <div className = 'col-md-6'>
                        <Link to = '/login'> <h3> Log In</h3></Link>
                    </div>
                </div>
                
            </div>
        )
    }
}
