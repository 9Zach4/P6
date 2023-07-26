import React, { useState } from "react";
import "./houseDescription.scss";

function HouseDescription({ title, content }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed((prevState) => !prevState);
  };

  return (
    <div className={`house-hold__description ${isCollapsed ? "collapsed" : ""}`}>
      <p className="description__title" onClick={toggleCollapse}>
        <span>{title}</span>
        <i className={`fa-solid fa-chevron-${isCollapsed ? "down" : "up"}`}></i>
      </p>

      {!isCollapsed && (
        <p className="description__content fade-in">
          {content}
        </p>
      )}
    </div>
  );
}

export default HouseDescription;
