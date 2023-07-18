import React from "react";
import imgVent from '../../assets/home_cover.png'
import "./houseBanner.scss";


function HouseBanner() {
    return(
        <div className= "houseCover">
            <img src={imgVent} alt="house" />
        </div>
    )
}

export default HouseBanner;