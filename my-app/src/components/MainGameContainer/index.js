import React, { Component } from "react";
import FriendCard from "../FriendCard";
import "./style.css";
import friends from "../../friends.json";

// const MainGameContainer = props => (
//   console.log(props);
//   <div>
//     {this.state.friends.map(friend => (
//       <FriendCard
//         id={friend.id}
//         key={friend.id}
//         name={friend.name}
//         image={friend.image}
//         occupation={friend.occupation}
//         location={friend.location}
//       />
//     ))}
//   </div>
// );

class MainGameContainer extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    message: "click one of the pictures to begin",
    score: 0,
    highScore: 0,
    friends
  };

  handleClick = (id, clicked) => {
    // const displayOrder =
  };

  render() {
    return (
      <div>
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </div>
    );
  }
}

export default MainGameContainer;
