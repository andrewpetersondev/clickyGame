import React from "react";
import "./style.css";

function Header(props) {
  return (
    <header>
      <h1>react js clicky game!</h1>
      <h2>how good is your memory?</h2>
      <h3>click as many cards as you can without clicking the same card twice</h3>
      <h4>score:{props.score} highscore: {props.highScore}</h4>
    </header>
  );
}
export default Header;
