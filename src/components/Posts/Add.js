import React from 'react';
import SimpleSchema from 'simpl-schema';
import axios from 'axios';
import { withRouter } from "react-router";
import Nav from '../../Nav';
class AddPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            userId: '',
            error:[],
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { title, body, userId } = this.state;
        const validationContext = new SimpleSchema({
            title: {
                type:String,
                optional:false
            },
            body: String,
            userId: SimpleSchema.Integer,
      
        }).newContext();
        validationContext.validate({ title, body, userId: +userId });
        if(validationContext.isValid()){
            axios.post('https://jsonplaceholder.typicode.com/posts',{ title, body, userId: +userId })
            .then( (response)=> {
                // handle success
               this.props.history.push(`/posts/${response.data.id}`
               )
                console.log(response);
               


            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        }
        else{
            this.setState({error:validationContext.validationErrors()});
        }
      
        console.log(validationContext.validationErrors());
       
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    render() {
        return (
            <>
           <Nav />
                <div className="container">

                    <form onSubmit={this.handleSubmit}>
                        <div class="form-group mt-5">
                            <label for="Title">Title</label>
                            <input type="text" class="form-control" name="title" id="Title" aria-describedby="emailHelp" placeholder="Enter Title.." />
                        </div>
                        <div class="form-group">
                            <label for="body">Body</label>
                            <textarea type="text" class="form-control" name="body" id="body" aria-describedby="emailHelp" placeholder="Enter body" />
                        </div>
                        <div class="form-group">
                            <label for="userId">user Id</label>
                            <input type="number" class="form-control" name="userId" id="userId" aria-describedby="emailHelp" placeholder="Enter userId" />
                        </div>

                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>

                </div>
            {/* <form onSubmit={this.handleSubmit}>
            
                <input type="text" id="title" onChange={this.handleChange}></input>
                <input type="text" id="body"></input>
                <input type="number" id="userId"></input>
                <button type="submit">Add </button>
            </form> */}
            
          
            
            <div>{
               this.state.error.length>0?
               this.state.error.map(e=>{
                   return (<div>{e.name}</div>)
               })
               :<h1></h1>
            }</div>
            </>
            );
    }
}

export default withRouter( AddPost);