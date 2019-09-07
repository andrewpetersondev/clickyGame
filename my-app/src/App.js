import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
// import PropTypes from "prop-types";

const startMessage = <h1>"react clicky game!"</h1>;
const correctMessage = <h2>"you're on a roll"</h2>;
const incorrectMessage = <h2>"game over"</h2>;

class App extends React.Component {
  constructor() {
    super();
    // Setting this.state.friends to the friends json array
    this.state = {
      friends: friends,
      score: 0,
      highScore: 0,
      message: startMessage
    };
  }

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  clickCard = (event, id, state) => {
    const selectedCards = this.state.friends.filter();
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

App.propTypes = {
  friend: React.PropTypes.object
};

export default App;
