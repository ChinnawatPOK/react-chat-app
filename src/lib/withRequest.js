import React, { Component } from "react";
import axios from "axios";

//Higher order component
// รับ component แล้ว return component ใหม่
export default (url) => (WrappedComponent) =>
  class extends Component {
    state = {
      data: [],
    };
    async componentDidMount() {
      const result = await axios.get(url);
      this.setState({ data: result.data });
    }

    render() {
      // {data : this.state.data}
      return <WrappedComponent {...this.state} {...this.props} />;
    }
  };
