import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import MainGameContainer from "./components/MainGameContainer";
import friends from "./friends.json";

const startMessage = <h2>"react clicky game!"</h2>;
const correctMessage = <h2>"you're on a roll"</h2>;
const incorrectMessage = <h2>"game over"</h2>;

class App extends Component {
  state = {
    friends,
    score: 0,
    highScore: 0,
    message: startMessage
  };

  handleClick = id => {
    // console.log("i am clicked", id);
    let i = 0;
    const newArray = this.state.friends.map(friend => {
      if (id === friend.id) {
        if (!friend.clicked) {
          friend.clicked = true;
          this.setState({
            score: this.state.score + 1,
            highScore: this.state.highScore + 1
            // message: correctMessage
          });
        } else {
          this.setState({
            score: 0
          });
        }
      }
      return friend;
    });

    this.setState({ friends: newArray });
    console.log(newArray);
    this.state.friends.sort(() => Math.random() - 0.5);

    this.setState({ friends });

    // alert("hello");
  };

  // clickCard = (event, id, state) => {
  //   const selectedCards = this.state.friends.filter();
  // };

  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highScore={this.state.highScore} />
        <MainGameContainer
          friends={this.state.friends}
          onClick={this.handleClick}
        />
      </Wrapper>
    );
  }
}

export default App;
