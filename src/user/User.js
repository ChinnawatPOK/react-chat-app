import React, { Component } from "react";
import axios from "axios";
import withRequest from "../lib/withRequest";

class User extends Component {
  //   onChange = (event) => {
  //     // console.log(event.target.value);
  //     // Props don't change value !!
  //     this.props.onNameChange(event.target.value);
  //   };
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>EmailD</td>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((user) => (
              // วน loop array ควรที key unique
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default withRequest("https://jsonplaceholder.typicode.com/users")(User);
