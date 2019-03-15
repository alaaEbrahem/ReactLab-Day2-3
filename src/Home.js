import React from 'react';
import Nav from './Nav';
import {Link,NavLink } from "react-router-dom";
class Home extends React.Component {
    render() {
        return (<div><Nav />
        <div className="container mt-5">
          <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Number of posts</h5>
        <p class="card-text">100 <span> Posts</span> </p>
        <NavLink to="/posts" class="btn btn-primary mr-3">Show Posts</NavLink>
        <NavLink to="/add" class="btn btn-primary">Add Post</NavLink>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Number of Users</h5>
        <p class="card-text">10 <span class="span-color"> Users</span></p>
        <NavLink to="/users" class="btn btn-primary mr-3">Show users</NavLink>
        <NavLink to="/adduser" class="btn btn-primary">Add User</NavLink>
      </div>
    </div>
  </div>
</div>
</div>
        </div>);
    }
}
export default Home;