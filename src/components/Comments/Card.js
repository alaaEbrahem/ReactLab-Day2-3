import React from 'react';
import {Link } from "react-router-dom";
class  CommentCard extends React.Component{
    render(){
return(<>
<div class="card text-center mb-3 mt-5">
  <div class="card-header">
    Comment :{this.props.index+1}
  </div>
  <div class="card-body">
    <h5 class="card-title">{this.props.name}</h5>
    <p class="card-text">{this.props.body}</p>
    <p class="card-text">{this.props.email}</p>
    
    <Link to={`/comments/${this.props.id}`} class="btn btn-primary mr-5">View comment</Link>
    {/* <Link to={`/users/${this.props.userId}`} class="btn btn-primary">View User</Link> */}
  </div>
  <div class="card-footer text-muted">
  
  </div>
</div>

</>)
}}
export default CommentCard;