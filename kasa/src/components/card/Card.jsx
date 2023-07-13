import React from "react";
import "./card.scss";
import { Link } from "react-router-dom";




function Card () {
    return (
        <div className="card">
            <Link to="/accomodation">
              <div className="card__title">titre de la location</div>
            </Link>
        </div>
    );
}

export default Card;