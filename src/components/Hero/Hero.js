import React from "react";
import heroImg from "../../assets/starter.png";

const Hero = () => {
  return (
    <div className="hero__container">
      <div className="info">
        <h3 className="subText">COVID-19 Alert</h3>
        <h1 className="title">
          Get Vaccinated To Stop the spread of Corona Virus
        </h1>
        <h5 className="description">
          There are Vaccines available to treat (COVID-19). Vaccinated people
          who contact (COVID-19) Might still Need Supportive Care.
        </h5>
        <button>Let Us Help</button>
      </div>
      <div className="hero__image">
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
