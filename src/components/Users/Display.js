import React, { Component } from 'react';
import axios from 'axios';
import Nav from '../../Nav';

class DisplayUser extends Component {
    state = {
        data: {}
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => {
                // handle success
                const data = response.data;
                console.log(response.data);
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
                        <h2> User </h2>
                    </div>
                    <div class="card-body">
                        <h5 class="card-text">username:{data.username}</h5>
                        <p class="card-text">email :{data.email}</p>

                        <p class="card-title">name: {data.name}</p>
                        <p class="card-text">phone:{data.phone}</p>
                        <p class="card-text">website:{data.website}</p>
                    </div>
                    <div class="card-footer text-muted">

                    </div>
                </div>
            </div>
        </>)
    }
}
export default DisplayUser;