import React from "react";
import "./Cards.css";

const CardUI = (props) => {
  return (
    <div className="card text-center">
      <div
        className="overflow"
        style={{ backgroundImage: `url(${props.back_img}` }}
      >
        <img src={props.imgsrc} alt="" className="card-img-top" />
      </div>
      <div className="card-body text-dark text-center">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary">{props.text}</p>
        <a href="http://localhost/ldh/" className="btn btn-outline-success">
          {props.bu}
        </a>
      </div>
    </div>
  );
};

export default CardUI;
