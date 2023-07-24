import React from "react";
import "./LocationGrid.scss";
import { useState, useEffect } from "react";
import data from "../../data/dataBase.json"
import Card from "../card/Card";


function LocationGrid() {
    const [House, setHouses] = useState([]);

    useEffect(() => { setHouses(data); }, []);
     
    //useEffect avec une array vide en second paramètre permet de faire une requête au chargement de la page
    return (
        <div className="grid">
           {data.map((data) => (
            <Card key={data.id} title={data.title} cover={data.cover} id ={data.id}/>
      ))}
          
           
        </div>
    );
}

export default LocationGrid;