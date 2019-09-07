import React, { Component } from "react";
import FriendCard from "../FriendCard";
import "./style.css";

class MainGameContainer extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="text-center">
          <p>{this.state.message}</p>
        </div>
      </div>
    );
  }
}
