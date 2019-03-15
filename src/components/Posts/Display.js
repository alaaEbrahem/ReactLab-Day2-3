import React, { Component } from 'react';
import axios from 'axios';
import Nav from '../../Nav';
import { Link } from "react-router-dom";
class Display extends Component {
    state = {
        data: {},
        user:[]
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => {
                // handle success
                const data = response.data;
             
                this.setState({ data });

                axios.get(`https://jsonplaceholder.typicode.com/users/${data.userId}`)
                .then((response) => {
                    // handle success
                    const user = response.data;
                    this.setState({ user });
    
    
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }
    render() {
        const { data } = this.state;
        return (<>
            <Nav />
            <div class="container">
                <div class="card text-center mb-3 mt-5">
                    <div class="card-header">
                        <h2> Post </h2>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{data.title}</h5>
                        <p class="card-text">{data.body}</p>
                        <p class="card-text">username: {this.state.user.username}</p>
                        <Link to={`/users/${data.userId}`} class="btn btn-primary mr-4 px-5">View User</Link>
                        <Link to={`/posts/comments/${data.id}`} class="btn btn-primary px-4">View Comments</Link>

                    </div>
                    <div class="card-footer text-muted">

                    </div>
                </div>
            </div>
        </>)
    }
}
export default Display;