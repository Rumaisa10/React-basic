import React, {Component} from 'react';
import {puticonsumer} from "./Mycontext";

class Puti extends Component {
    render() {
        return (
            <div>
                <h1>
                    <puticonsumer>
                        {
                            msg=>{
                                return msg;
                            }
                        }
                    </puticonsumer>
                </h1>
            </div>
        );
    }
}

export default Puti;