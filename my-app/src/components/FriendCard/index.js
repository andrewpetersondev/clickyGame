import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div
      href="#"
      key={props.id}
      className="card"
      onClick={() => props.onClick(props.id)}
    >
      {console.log(props.onClick)}
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
}

// FriendCard.propTypes = {
//   friend: React.PropTypes.bool.isRequired
// };

export default FriendCard;
