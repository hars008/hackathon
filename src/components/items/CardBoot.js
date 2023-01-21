import React from 'react';
import './CardBoot.css';
import StarRating from 'react-star-rating';
const CardBoot = (props) => {
  return (
    <div className="card" style={{ width: "22rem" }}>
      <img src={props.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <ul className="list-group list-group-flush myCardList ">
          <li className="list-group-item">
            <b>genre: {props.genre}</b>
          </li>
          <li className="list-group-item">
            <b>Year of Release: {props.Year}</b>
          </li>
          <li className="list-group-item">
            <b>Rating: </b>
          </li>
        </ul>
      </div>

      <div className="card-body">
        <a href="#" className="card-link">
          Card link
        </a>
        <a href="#" className="card-link">
          Another link
        </a>
      </div>
    </div>
  );
}

export default CardBoot
