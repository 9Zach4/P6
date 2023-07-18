import React from "react";
import "./accomodation.scss";
import HouseDescription from "../../components/HouseDescription/HouseDescription";
import HouseBanner from "../../components/houseBanner/houseBanner";
import HouseHeader from "../../components/houseHeader/HouseHeader";
function Accomodation() {
    
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

