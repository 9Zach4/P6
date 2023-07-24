import React from "react";
import "./houseDescription.scss";

function houseDescription({title, content}) {
  return (

    <div className="house-hold__description">
                <p className="description__title">
                    <span>{title}</span>
                    <i className="fa-solid fa-chevron-up"></i>
                </p>
                <p className="description__content">{content}</p>
            </div>
  );
}

export default houseDescription;
