import React from "react";
import "./locationGrid.scss";
import data from "../../data/dataBase.json";
import Card from "../Card/Card";

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
