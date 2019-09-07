import React from "react";
import "./style.css";

function Header(props) {
  return (
    <header>
      <h1>react js clicky game!</h1>
      <h3>how good is your memory?</h3>
      <h2>
        click as many cards as you can without clicking the same card twice
        <p>
          score:{props.score} highscore: {props.highScore}
        </p>
      </h2>
    </header>
  );
}
export default Header;
