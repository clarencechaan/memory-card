import React from "react";
import "../styles/Card.css";

function Card(props) {
  return (
    <div className="Card" onClick={() => props.handleCardClicked(props.index)}>
      <img src={props.src} alt="" />
      <p>{props.character}</p>
    </div>
  );
}

export default Card;
