import React from 'react';
import axios from 'axios';
import PostCard from '../Posts/Card';
import Nav from '../../Nav';

class UsersPosts extends React.Component {

    state = {
        data: []
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        console.log(id);
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
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
        console.log(data);

        const dataList = (data.length > 0) ? data.map((p, index) => {
            return (<PostCard key={p.id} title={p.title} body={p.body} index={index} id={p.id} userId={p.userId} />)
        }) : <p>There is no posts</p>
        return (<><Nav />
            <div class="container">
                <div className="container mt-3 ml-5">
                </div>
                {dataList}</div></>);
    }
}
export default UsersPosts;