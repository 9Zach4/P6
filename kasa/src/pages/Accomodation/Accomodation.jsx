import React, { useEffect, useState } from "react";
import "./accomodation.scss";
import HouseDescription from "../../components/HouseDescription/HouseDescription";
import HouseBanner from "../../components/houseBanner/houseBanner";
import HouseHeader from "../../components/houseHeader/HouseHeader";

import data from "../../data/dataBase.json"
import { useParams, useNavigate } from "react-router-dom";  


function Accomodation() {
    // const Location = useLocation();
    const {id} = useParams()
    const navigate = useNavigate()
 ; 
    const [selectedHouse, setSelectedHouse] = useState(null);
    
useEffect(() => {

// function fetchLocationData() {
    const datas = data.find((location) => location.id === locationId);

    if (!datas) {
        navigate("*");
    } else {
        setSelectedHouse(data);
    }
}, [id, navigate]);

if (!selectedHouse) {
    return null;


    // const locationId = Location.state.locationId;
    // const selectedHouse = data.find((location) => location.id === locationId);
    // console.log("locationData:",selectedHouse);
    // setSelectedHouse(selectedHouse);
     
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

