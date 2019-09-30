import React, { Component } from "react";
import "./style.css";

class Message extends Component {
  render() {
    return (
      <div className="container">
        <div className="text-center">
          {message}
        </div>
      </div>
    );
  }
}

export default Message;