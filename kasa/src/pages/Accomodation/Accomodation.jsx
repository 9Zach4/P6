import React, { useEffect } from "react";
import "./accomodation.scss";
import HouseDescription from "../../components/HouseDescription/HouseDescription";
import HouseBanner from "../../components/houseBanner/houseBanner";
import HouseHeader from "../../components/houseHeader/HouseHeader";
import { useLocation } from "react-router-dom";
import data from "../../data/dataBase.json"


function Accomodation() {
    const Location = useLocation();
    console.log("location:",Location);
    console.log("location.state:",Location.state.locationId); 
    

    useEffect(() => {
        console.log(data);
    }, []);


    return (
        <div className="house-hold">
            <HouseBanner />
            <HouseHeader />
            <div className="description_box">
                <HouseDescription />
                <HouseDescription />
           </div>
        </div> 
    )
}


export default Accomodation;

