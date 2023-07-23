import React from "react";
import "./houseBanner.scss";


function HouseBanner(props) {
    return(
        <div className= "houseCover">
            <img src={props.imageUrl} alt="house" />
        </div>
    )
}

export default HouseBanner;