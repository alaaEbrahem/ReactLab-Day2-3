import React from 'react';
import {Link } from "react-router-dom";
const UserCard=(props)=>{
return(<>
<div class="card text-center mb-3 mt-5">
  <div class="card-header">
    User :{props.index+1}
  </div>
  <div class="card-body">
    <h5 class="card-title">{props.name}</h5>
    <p class="card-text">{props.email}</p>
    <Link to={`/users/${props.id}`} class="btn btn-primary mr-4">View User</Link>
    <Link to={`/posts/users/${props.id}`} class="btn btn-primary">My Posts</Link>
  </div>
  <div class="card-footer text-muted">
  
  </div>
</div>

</>)
}
export default UserCard;