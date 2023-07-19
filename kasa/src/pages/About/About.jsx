import React from "react";
import "./about.scss";
import HouseBanner from "../../components/houseBanner/houseBanner";
import HouseDescription from "../../components/HouseDescription/HouseDescription";

function About() {
  return (
    <>
        <HouseBanner />
        <div className="about__box">
           <HouseDescription />
           <HouseDescription />
           <HouseDescription />
           <HouseDescription />
        </div>

    </>
  );
}
export default About;