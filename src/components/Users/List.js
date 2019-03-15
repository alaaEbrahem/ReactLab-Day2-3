import React from 'react';
import axios from 'axios';
import UserCard from './Card';
import Nav from '../../Nav';
import {Link } from "react-router-dom";


class UsersList extends React.Component {

   state = {
        data: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then( (response)=> {
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
   
        const dataList = (data.length > 0) ? data.map((user,index) => {
            return (<UserCard key={user.id} name={user.name} email={user.email} index={index} id={user.id}/>)
        }) : <p>There is no Users</p>
        return (<><Nav/>
        <div class="container">
        <div className="container mt-3 ml-5">
        <Link to="/adduser" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Add User</Link>
        </div>
        {dataList}</div></>);
    }
}
export default UsersList;