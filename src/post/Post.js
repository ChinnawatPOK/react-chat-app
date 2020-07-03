import React, { Component } from "react";
// import axios from "axios";
import withRequest from "../lib/withRequest";

class Post extends Component {
  //   constructor() {
  //     super();
  //   }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>userId</td>
              <td>Id</td>
              <td>Title</td>
              <td>Body</td>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((data) => (
              <tr key={data.id}>
                <td>{data.userId}</td>
                <td>{data.id}</td>
                <td>{data.title}</td>
                <td>{data.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default withRequest("https://jsonplaceholder.typicode.com/posts")(Post);
