import React from 'react';
import axios from 'axios';
import CommentCard from './Card';
import Nav from '../../Nav';

class PostComments extends React.Component {

    state = {
        data: []
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        console.log(id);
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
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

        const dataList = (data.length > 0) ? data.map((c, index) => {
            return (<CommentCard key={c.id} name={c.name} email={c.email} body={c.body} index={index} id={c.id} postId={c.postId}/>)
        }) : <p>There is no comments</p>
        return (<><Nav />
            <div class="container">
                <div className="container mt-3 ml-5">
                </div>
                {dataList}</div></>);
    }
}
export default PostComments;