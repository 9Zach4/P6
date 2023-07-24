import React from "react";
import "./about.scss";
import Banner from "../../layout/banner/Banner";
import HouseDescription from "../../components/HouseDescription/HouseDescription";
import aboutData from "../../data/aboutData";

function About() {
  return (
    <>
        <Banner/>
        <div className="about__box">
        {aboutData.map((house) => (
          <HouseDescription
            key={house.id}
            title={house.title}
            content={house.description}
          />
        ))}
           
        </div>

    </>
  );
}
export default About;

