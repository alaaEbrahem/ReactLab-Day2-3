import React from 'react';
import axios from 'axios';
import PostCard from './Card';
import Nav from '../../Nav';
import {Link } from "react-router-dom";


class PostsList extends React.Component {

   state = {
        data: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
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
   
        const dataList = (data.length > 0) ? data.map((p,index) => {
            return (<PostCard key={p.id} title={p.title} body={p.body} index={index} id={p.id} userId={p.userId}/>)
        }) : <p>There is no posts</p>
        return (<><Nav/>
        <div class="container">
        <div className="container mt-3">
        <Link to="/add" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Add Post</Link>
        </div>
        {dataList}</div></>);
    }
}
export default PostsList;