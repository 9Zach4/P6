import React from "react";
import "./houseBanner.scss";
import  { useState } from "react";

function HouseBanner(props) {

    const  pictures  = props.pictures;
    const [currentPicture, setCurrentPicture] = useState(0);
    

const getClassname = (index) => {
    if (index === currentPicture) 
        return "show";
        return "";
    } ;
    

    return(
        <div className= "houseCover">
          
            {pictures.map((pics, index) => ( <img key={pics} src={pics} alt=""  className= {getClassname ()}></img>
            ))}
        </div>
    )
}

export default HouseBanner;