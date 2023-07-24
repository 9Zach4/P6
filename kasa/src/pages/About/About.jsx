import React from "react";
import "./about.scss";
import Banner from "../../layout/banner/Banner";
import HouseDescription from "../../components/HouseDescription/HouseDescription";

function About() {
  return (
    <>
        <Banner/>
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