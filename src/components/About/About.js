import React from "react";
import AboutImg from "../../assets/whatIsCovid.png";

const About = () => {
  return (
    <div className="about__container">
      <div className="about__image">
        <img src={AboutImg} alt="" />
      </div>

      <div className="info">
        <h3 className="subText">What Is Covid-19</h3>
        <h1 className="title">Coronavirus</h1>
        <h5 className="description">
          Corona Viruses are types of Virus. There are many different kinds, and
          some cause disease. A newly identified type has caused a recent
          outbreak of Respiratory illness now called COVID-19.
        </h5>
        <button>Let Us Help</button>
      </div>
    </div>
  );
};

export default About;
