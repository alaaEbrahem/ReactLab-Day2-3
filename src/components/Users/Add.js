import React from 'react';
import SimpleSchema from 'simpl-schema';
import axios from 'axios';
import Nav from '../../Nav';
import { withRouter } from "react-router";
class AddUser extends React.Component {
    state = {
        name: '',
        username: '',
        email: '',
        error: [],
    }
  
    handleSubmit = (e) => {
        e.preventDefault();
        const { name, username, email } = this.state;
        const validationContext = new SimpleSchema({
            name: {
                type: String,
                optional: false
            },
            username: String,
            email: String,

        }).newContext();
        validationContext.validate({ name, username, email });
        if (validationContext.isValid()) {
            axios.post('https://jsonplaceholder.typicode.com/users', { name, username, email })
                .then((response) => {
                    // handle success
                    this.props.history.push(`/users/${response.data.id}`)
                    console.log(response);



                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        }
        else {
            this.setState({ error: validationContext.validationErrors() });
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
                            <label for="name">Name</label>
                            <input type="text" class="form-control" onChange={this.handleChange} id="name" aria-describedby="emailHelp" placeholder="Enter name.." />
                        </div>
                        <div class="form-group">
                            <label for="username">Username</label>
                            <input type="text" class="form-control" onChange={this.handleChange} id="username" aria-describedby="emailHelp" placeholder="Enter username" />
                        </div>
                        <div class="form-group">
                            <label for="email">Email address</label>
                            <input type="email" class="form-control" onChange={this.handleChange} id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>

                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>

                </div>
                {/* <form onSubmit={this.handleSubmit}>
            
                <input type="text" id="name" onChange={this.handleChange}></input>
                <input type="text" id="username"></input>
                <input type="email" id="email"></input>
                <button type="submit">Add </button>
            </form> */}


            
                <div>{
                    this.state.error.length > 0 ?
                        this.state.error.map(e => {
                            return (<div>{e.name}</div>)
                        })
                        : <h1></h1>
                }</div>
            </>
        );
    }
}

export default withRouter(AddUser);