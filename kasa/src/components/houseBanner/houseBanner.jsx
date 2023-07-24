import React from "react";
import "./houseBanner.scss";


function HouseBanner({cover}) {
    return(
        <div className= "houseCover">
            <img src={cover} alt="house" />
        </div>
    )
}

export default HouseBanner;