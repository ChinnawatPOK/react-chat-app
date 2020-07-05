import React, { Component } from "react";
import Message from "./Message";

class MessageList extends Component {
  render() {
    const { messages } = this.props;
    return messages.map((el) => (
      <ul className="Messages-list">
        <Message message={el} />
      </ul>
    ));
  }
}
export default MessageList;
