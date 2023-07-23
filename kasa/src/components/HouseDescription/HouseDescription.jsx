import React from "react";
import "./houseDescription.scss";

function houseDescription(props) {
  return (

    <div className="house-hold__description">
                <p className="description__title">
                    <span>{props.title}</span>
                    <i className="fa-solid fa-chevron-up"></i>
                </p>
                <p className="description__content"> {props.content}</p>
            </div>
  );
}

export default houseDescription;
