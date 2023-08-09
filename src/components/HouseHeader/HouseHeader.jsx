import React from "react";
import "./houseHeader.scss";

function HouseHeader(props) {
     const name = props.selectedHouse.host.name;
    const [firstName, lastName] = name.split(" ");

    return(
        <div className="house-hold__header">
            <div className="house-hold__title"> 
               <h1>{props.selectedHouse.title}</h1>
               <h2>{props.selectedHouse.location}</h2>

            <div className="house-hold__tags">
                {props.selectedHouse.tags.map((tag, index) => (<span key={index}>{tag}</span>))}  
            </div>

            </div> 
        <div className="house-hold__owner">

            <div className="house-hold__owner__details">
                <h3>
                   <span>{firstName}</span>
                   <span>{lastName}</span> 
                </h3>

                <div className="house-hold__owner__badge">
                    <img src={props.selectedHouse.host.picture} alt="Propiétaire pics" />
                </div>

            </div>
            <div className= "house-hold__owner__star">
            {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className= {props.selectedHouse.rating > star ? "on" : ""}>★</span>
            ))}
            </div>
       </div>

    </div>

    )   
}
export default HouseHeader; 