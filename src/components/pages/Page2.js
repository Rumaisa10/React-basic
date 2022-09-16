import React, {Component} from 'react';
import {BrowserRouter ,Route , Switch , NavLink , Link, Redirect} from 'react-router-dom';



class Page2 extends Component {
    constructor() {
        super();
        this.state={
            passdata:"rumaisa"
        }

    }

    render() {
        var par = "/page3/" + this.state.passdata;
        if (sessionStorage.getItem("username") == null) {
            return <Redirect to="/login"/>
        } else {
            return (
                <div>
                    <h1>page2</h1>
                    <button><Link to={par}>pass my name</Link></button>
                </div>
            )
        }
    }
    }
export default Page2;
