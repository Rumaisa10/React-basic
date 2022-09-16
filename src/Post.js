import React, {Component} from 'react';
import axios from "axios";

class Post extends Component {

    constructor() {
        super();
        this.state={
            postData:"",
            postResult:""
        }
    }
   onChangerHandler=(event)=>{
       var mydata= event.target.value;
       this.setState({postData:mydata})

   }
   onClickHandler=()=> {
       axios.post('http://ss.rabbil.com/test.php', this.state.postData)
           .then(response => {
               this.setState({postResult: response.data})
               alert(this.state.postResult)
           })
           .catch(error => {
               alert("something went wrong")
           })
   }
    render() {
        return (
            <div>
                <input onChange={this.onChangeHandler} type="text"/>
                <button onClick={this.onClickHandler}>send</button>
            </div>
        );
    }
}

export default Post;