import React, { useEffect, useState } from "react";
import "./accomodation.scss";
import HouseDescription from "../../components/HouseDescription/HouseDescription";
import HouseBanner from "../../components/HouseBanner/HouseBanner";
import HouseHeader from "../../components/HouseHeader/HouseHeader";

import data from "../../data/dataBase.json";
import { useParams, useNavigate } from "react-router-dom";  

function Accomodation() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [selectedHouse, setSelectedHouse] = useState(null);
    useEffect(() => {
        const datas = data.find((location) => location.id === id);

        if (!datas) {
            navigate("*");
        } else {
            setSelectedHouse(datas);
        }
    }, [id, navigate]);

    if (!selectedHouse) {
        return <div>Loading...</div>; // Display a loading message or a placeholder
    }

    return (
        <div className="house-hold">
            <HouseBanner pictures={selectedHouse.pictures} />
            <HouseHeader selectedHouse={selectedHouse} />
            <div className="description_box">
                <HouseDescription title="Description" content={selectedHouse.description} />
                <HouseDescription title="Equipements" content=
                  {selectedHouse.equipments.map((equipment, index) => (
                    <li key={index}>
                      {equipment}
                    </li>))}/>
            </div>
        </div> 
    );
}

export default Accomodation;


   
     





 


