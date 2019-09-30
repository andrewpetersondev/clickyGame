import React, { Component } from "react";
import FriendCard from "../FriendCard";
import "./style.css";

function MainGameContainer(props) {
  return (
    <div>
      {props.friends.map(friend => {
        return (
          <FriendCard
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
            onClick={props.onClick}
          />
        );
      })}
    </div>
  );
}

export default MainGameContainer;
