import React from "react";
import "./style.css";

const FriendCard = props => (
  <div
    key={props.id}
    className="card"
    onClick={() => props.handleClick(props.id, props.clicked)}
  >
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Occupation:</strong> {props.occupation}
        </li>
        <li>
          <strong>Location:</strong> {props.location}
        </li>
      </ul>
    </div>
  </div>
);

// FriendCard.propTypes = {
//   friend: React.PropTypes.bool.isRequired
// };

export default FriendCard;
