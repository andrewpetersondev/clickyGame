import React, { Component } from "react";
import FriendCard from "../FriendCard";
import "./style.css";

class MainGameContainer extends Component {
  state = {
    message: "click one of the pictures to begin",
    score: 0,
    highScore: 0
  };

  render() {
    return <div className="container-fluid"></div>;
  }
}

export default MainGameContainer;
