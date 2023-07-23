import React from "react";
import "./card.scss";
import { Link } from "react-router-dom";




function Card (props) {
    
 

    return (
        <div className="card">
            <Link to= "/accomodation" state={{locationId: props.id}}> 
            <img src={props.imageUrl} alt="" />
              <div className="card__title">{props.title}</div>
            </Link>
        </div>
    );
}

export default Card;