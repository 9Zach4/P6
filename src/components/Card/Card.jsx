import "./card.scss";
import  { Link } from "react-router-dom";
import React from "react";

function Card({id, cover, title}) {
    return (
        <Link to= {`/accomodation/${id}`}className="card">
           <img src={cover} alt="Aperçu de la location" />
           <div className="card__title">{title}</div>
        </Link>
    )
};
    
     


export default Card


