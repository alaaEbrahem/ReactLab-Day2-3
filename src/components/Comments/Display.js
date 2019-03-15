import React, { Component } from 'react';
import axios from 'axios';
import Nav from '../../Nav';
import { Link } from "react-router-dom";
class DisplayComment extends Component {
    state = {
        data: {},
        user:[]
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`)
            .then((response) => {
                // handle success
                const data = response.data;
             
                this.setState({ data });

              

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
                        <h2> Comment </h2>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{data.name}</h5>
                        <p class="card-text">{data.email}</p>
                        <p class="card-text">body: {data.body}</p>
   
                    </div>
                    <div class="card-footer text-muted">

                    </div>
                </div>
            </div>
        </>)
    }
}
export default DisplayComment;