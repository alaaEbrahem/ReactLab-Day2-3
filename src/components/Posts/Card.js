import React from 'react';
import {Link } from "react-router-dom";
class  PostCard extends React.Component{
    render(){
return(<>
<div class="card text-center mb-3 mt-5">
  <div class="card-header">
    Post :{this.props.index+1}
  </div>
  <div class="card-body">
    <h5 class="card-title">{this.props.title}</h5>
    <p class="card-text">{this.props.body}</p>
   
    
    <Link to={`/posts/${this.props.id}`} class="btn btn-primary mr-5">View Post</Link>
    <Link to={`/users/${this.props.userId}`} class="btn btn-primary">View User</Link>
  </div>
  <div class="card-footer text-muted">
  
  </div>
</div>

</>)
}}
export default PostCard;