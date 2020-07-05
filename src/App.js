import React, { Component } from "react";
import User from "./user/User";
import Post from "./post/Post";
import "./App.css";
import { Route, Link } from "react-router-dom";
import Request from "./lib/Request";
import Chatroom from "./chat/Chatroom";
import Chatform from "./chat/Chatform";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

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
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Home</NavbarBrand>
          {/* <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar> */}
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/users/">Users</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/posts/">Posts</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/chat">Chat</NavLink>
            </NavItem>
          </Nav>
          {/* </Collapse> */}
        </Navbar>
        <Route
          path="/users"
          component={() => (
            <Request url="https://jsonplaceholder.typicode.com/users">
              {/* (data) รับ data from Request and send to User/ */}
              {/* ใน request ใส่ component ที่เราจะนำไป request */}
              {(data) => <User data={data} />}
            </Request>
          )}
        />
        <Route path="/posts" component={Post} />
        {/* <User name={name} onNameChange={this.onNameChange} /> */}
        <Route path="/chat" component={Chatform} />
        <Route path="/chatroom" component={Chatroom} />
      </div>
    );
  }
}

export default App;
