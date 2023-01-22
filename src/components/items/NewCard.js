import React, { useState } from "react";
import "./newCard.css";
function NewCard(props) {
  const [showCard, setShowCard] = useState(true);

  return (
    <div
      className={`movie-card ${showCard ? "show" : "hide"}`}
      onMouseEnter={() => setShowCard(true)}
      onMouseLeave={() => setShowCard(false)}
    >
      <img src={props.movie.cover} alt={props.movie.title} />
      <div className="movie-info">
        <h2>{props.movie.title}</h2>
        <p>{props.movie.releaseYear}</p>
      </div>
    </div>
  );
}

export default NewCard;
