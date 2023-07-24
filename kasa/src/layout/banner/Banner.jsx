import React from "react"; 
import "./banner.scss";
import { useLocation } from "react-router-dom";
import {useEffect, useState} from "react";


function Banner () {
    const location = useLocation();
    const [aboutPage, setAboutPage] = useState(false);

    useEffect(() => {
        if (location.pathname === "/about") {
            setAboutPage(true);
        
};
    }, [ location.pathname]);

    return (
        <div className= { aboutPage ? "about_banner" : "banner" }>
            {!aboutPage && <h1>Chez vous, partout et ailleurs</h1>}
        </div>
    );
}

export default Banner;