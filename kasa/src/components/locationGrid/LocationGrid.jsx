import React from "react";
import "./LocationGrid.scss";
import { useState, useEffect } from "react";
import data from "../../data/dataBase.json"
import Card from "../card/Card";


function LocationGrid() {
    const [houses, setHouses] = useState([]);

    useEffect(() => { setHouses(data); }, []);
     
    //useEffect avec une array vide en second paramètre permet de faire une requête au chargement de la page
    return (
        <div className="grid">
           {houses.map((location) => (
            <Card key={location.id} title={location.title} imageUrl={location.cover} />
      ))}
          
           
        </div>
    );
}

export default LocationGrid;