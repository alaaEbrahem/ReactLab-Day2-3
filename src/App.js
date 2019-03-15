import React, { Component } from 'react';
import PostsList from './components/Posts/List';
import UsersList from './components/Users/List';
import AddPost from'./components/Posts/Add';
import AddUser from'./components/Users/Add';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Display from './components/Posts/Display';
import DisplayUser from './components/Users/Display';
import {Switch} from 'react-router';
import Home from './Home';
import UserPosts from './components/Users/UserPosts';
import PostComments from './components/Comments/PostComments';
import DisplayComment from './components/Comments/Display';


class App extends Component {
  render() {
    return (
     
      <>
    <Router>
   
      <Switch>
     //posts 
    <Route path="/posts" exact component={PostsList} />
    <Route path="/" exact component={Home} />
    <Route path="/posts/:id" exact component={Display} />
    <Route path="/add" exact component={AddPost} />
     //users
    <Route path="/users" exact component={UsersList} />
    <Route path="/users/:id" exact component={DisplayUser} />
    <Route path="/adduser" exact component={AddUser} />
    <Route path="/posts/users/:id" exact component={UserPosts} />
    //comments
    <Route path="/posts/comments/:id" exact component={PostComments} />
    <Route path="/comments/:id" exact component={DisplayComment} />
    </Switch>
    </Router>
    </>
    );
  }
}

export default App;
