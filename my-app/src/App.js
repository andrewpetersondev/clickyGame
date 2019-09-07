import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import MainGameContainer from "./components/MainGameContainer";
import friends from "./friends.json";
// import PropTypes from "prop-types";

const startMessage = <h2>"react clicky game!"</h2>;
// const correctMessage = <h2>"you're on a roll"</h2>;
// const incorrectMessage = <h2>"game over"</h2>;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends,
      score: 0,
      highScore: 0,
      message: startMessage
    };
  }

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  handleClick = (id, clicked) => {};

  // clickCard = (event, id, state) => {
  //   const selectedCards = this.state.friends.filter();
  // };

  render() {
    return (
      <Wrapper>
        <Header />
        <MainGameContainer />
      </Wrapper>
    );
  }
}

// App.propTypes = {
//   friend: React.PropTypes.object
// };

export default App;
