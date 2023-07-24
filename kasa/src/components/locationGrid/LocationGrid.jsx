import React from "react";
import "./LocationGrid.scss";
import data from "../../data/dataBase.json";
import Card from "../card/Card";

function LocationGrid() {
  return (
    <div className="grid">
      {data.map((data) => (
        <Card key={data.id} title={data.title} cover={data.cover} id={data.id} />
      ))}
    </div>
  );
}

export default LocationGrid;
