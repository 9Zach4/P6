import React from "react";
import "./houseHeader.scss";

function HouseHeader() {
    return(
        <div className="house-hold__header">
        <div className="house-hold__title">
       <h1>Crazyloft on canal st martin</h1>
       <h2>Paris, Ile de France</h2>
       <div className="house-hold__tags">
          <span>Cozy</span>
          <span>Canal</span>
          <span>Paris</span>
       </div>
        </div> 
        <div className="house-hold__owner">
            <div className="house-hold__owner__details">
                <h3>
                   <span>Alexandre</span>
                   <span>Dumas</span> 
                </h3>
                <div className="house-hold__owner__badge"></div>
            </div>
        <div className= "house-hold__owner__star">
           <span className="on">★</span>
           <span className="on">★</span>
           <span className="on">★</span>
           <span className="off">★</span>
           <span className="off">★</span>
        </div>
       </div>
    </div>

    )   
}
export default HouseHeader; 