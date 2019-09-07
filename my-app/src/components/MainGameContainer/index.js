import React, { Component } from "react";
import FriendCard from "../FriendCard";
import "./style.css";

function MainGameContainer(props) {
  return (
    <div>
      {console.log(props.onClick)}
      {props.friends.map(friend => {
        return (
          <FriendCard
            id={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
            onClick={props.onClick}
            test="data"
          />
        );
      })}
    </div>
  );
}

export default MainGameContainer;
