import React from 'react';
import {Link ,NavLink} from "react-router-dom";

const Nav=()=>{
    return(
        <>
       <nav class="nav">
    <div class="container">
      <div class="nav-heading">
        <button class="toggle-nav" data-toggle="open-navbar1"><i class="fa fa-align-right"></i></button>
        <Link class="brand" to="/">Lab2</Link>
      </div>
      <div class="menu" id="open-navbar1">
        <ul class="list">
          <li><NavLink exact to="/">Home</NavLink></li>
       
      
          <li><NavLink to="/posts">Posts</NavLink></li>
          <li><NavLink to="/users">Users</NavLink></li>
        </ul>
      </div>
    </div>
  </nav>
     
        
     
      </>
    )
}
export default  Nav;