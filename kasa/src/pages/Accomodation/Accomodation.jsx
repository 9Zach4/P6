import React, { useEffect, useState } from "react";
import "./accomodation.scss";
import HouseDescription from "../../components/HouseDescription/HouseDescription";
import HouseBanner from "../../components/houseBanner/houseBanner";
import HouseHeader from "../../components/houseHeader/HouseHeader";
import { useLocation } from "react-router-dom";
import data from "../../data/dataBase.json"


function Accomodation() {
    const Location = useLocation();
 ; 
    const [selectedHouse, setSelectedHouse] = useState(null);
    
useEffect((fetchLocationData), []);

function fetchLocationData() {
    const locationId = Location.state.locationId;
    const selectedHouse = data.find((location) => location.id === locationId);
    console.log("locationData:",selectedHouse);
    setSelectedHouse(selectedHouse);
     
}

if (!selectedHouse) {
    return <div>Loading...</div>;
}



    return (
        <div className="house-hold">
            <HouseBanner imageUrl={selectedHouse.cover} />
            <HouseHeader selectedHouse={selectedHouse} />
            <div className="description_box">
                <HouseDescription title="Description" content={selectedHouse.description} />
                <HouseDescription title="Equipements" content={selectedHouse.equipments} />
           </div>
        </div> 
    )
}


export default Accomodation;

