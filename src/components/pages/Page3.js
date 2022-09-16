import React, {Component} from 'react';
import {Link ,NavLink , Redirect} from "react-router-dom";

class Page3 extends Component {
    constructor({match}) {
        super();
        this.state = {

        }
    }

    render() {
        if (sessionStorage.getItem("username") == null) {
            return <Redirect to="/login"/>
        } else {
            return (
                <div>
                    <h1>page 3</h1>
                </div>
            )
        }
    }
}
export default Page3;