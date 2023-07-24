import React from "react";
import "./houseBanner.scss";


function HouseBanner({imageUrl}) {
    return(
        <div className= "houseCover">
            <img src={imageUrl} alt="house" />
        </div>
    )
}

export default HouseBanner;