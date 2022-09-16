import React, {Component} from 'react';

class Login extends Component {

    logout=()=>{
        sessionStorage.clear()
    }

    login=()=>{
        sessionStorage.setItem("username","rumaisa")
    }

    render() {
        return (
            <div>
                <button onClick={this.logout}>log out</button>
                <button onClick={this.login}> login </button>
            </div>
        );
    }
}

export default Login;