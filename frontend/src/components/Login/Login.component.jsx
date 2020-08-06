import React, { Component } from 'react';
import './login.css';

// A SIMPLE COMPONENT THAT REQUESTS USERNAME WHEN A EVERY NEW CONNECTION IS MADE
class Login extends Component {

    // THIS FUNCTION TAKES THE USERNAME INPUT VALUE AND MAKES IT AVAILABLE IN THE APP COMPONENT USING PROPS
    login = (e) => {
        e.preventDefault()
        this.props.setUsername(e.target.username.value)
    }
    render() {
        return (
            <div className="login">
                <form onSubmit={this.login}>
                    <label>Username:</label>
                    <input type='text' id='username' /><br/>
                    <input type='submit' id='submit' value='Log in' />
                </form>
            </div>
        );
    }
}

export default Login;
