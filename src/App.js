import React, { Component } from "react";
import User from "./user/User";
import Post from "./post/Post";
import "./App.css";
import { Route, Link } from "react-router-dom";

class App extends Component {
  state = {
    name: "Future Skill",
  };
  onNameChange = (name) => {
    this.setState({ name: name });
  };
  render() {
    const { name } = this.state;
    return (
      <div>
        <div>Hello {name}</div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/users">Users</Link>
          <Link to="/posts">Posts</Link>
        </div>
        <Route path="/users" component={User} />
        <Route path="/posts" component={Post} />{" "}
        {/* <User name={name} onNameChange={this.onNameChange} /> */}
      </div>
    );
  }
}

export default App;
