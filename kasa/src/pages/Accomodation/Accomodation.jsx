import React from "react";
import "./accomodation.scss";
import  imgVent from '../../assets/home_cover.png'

function Accomodation() {
    
    return (
        <div className="house-hold">
            <div>
               <img src={imgVent} alt="house" />
            </div>
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
            <div className="house-hold__description">
                <p>holdescription</p>
                <p>bla bla bla</p>
            </div>
            <div className="house-hold__description">
                <p>holddescription</p>
                <p>bla bla bla</p>
            </div>
           
        </div> 
    )
}


export default Accomodation;