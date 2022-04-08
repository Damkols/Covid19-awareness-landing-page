import React from "react";
import "./Solutions.scss";
import virus3 from "../../assets/virus3.png";
import virus1 from "../../assets/virus1.png";
import virus4 from "../../assets/virus4.png";
import girl1 from "../../assets/girl1.png";
import girl2 from "../../assets/girl2.png";
import girl3 from "../../assets/girl3.png";
import girl4 from "../../assets/girl4.png";

const Solutions = () => {
  return (
    <section className="solutions" id="solution">
      <div className="virus">
        <img src={virus3} alt="" />
      </div>
      <div className="virus2">
        <img src={virus1} alt="" />
      </div>
      <div className="virus3">
        <img src={virus4} alt="" />
      </div>

      <div className="info">
        <h4 className="subTitle">Covid-19</h4>
        <h2 className="title">
          What Should We Do <span>?</span>
        </h2>
        <p className="description">
          Corona Viruses are a type of virus. There are many different kinds,
          and some cause disease. A newly identified type.
        </p>
      </div>
      <div className="content">
        <div className="solution">
          <div className="solution-info">
            <div className="round">01</div>
            <div className="info-container">
              <h2 className="title">Wear Masks</h2>
              <p className="description">
                Continually seize impactful vitals rather than future-proof
                supply chains. Uniquely exploit emerging niches via fully tested
                meta-services. Competently pursue standards compliant leadership
                skills vis-a-vis pandemic "Outside the Box" Thinking.
              </p>
            </div>
          </div>
          <div className="image">
            <img src={girl1} alt="" />
          </div>
        </div>
        <div className="solution">
          <div className="image changeOrder">
            <img src={girl2} alt="" />
          </div>
          <div className="solution-info">
            <div className="round">02</div>
            <div className="info-container">
              <h2 className="title">Wash your hands</h2>
              <p className="description">
                Continually seize impactful vitals rather than future-proof
                supply chains. Uniquely exploit emerging niches via fully tested
                meta-services. Competently pursue standards compliant leadership
                skills vis-a-vis pandemic "Outside the Box" Thinking.
              </p>
            </div>
          </div>
        </div>
        <div className="solution">
          <div className="solution-info">
            <div className="round">03</div>
            <div className="info-container">
              <h2 className="title">Use Nose - Rag</h2>
              <p className="description">
                Continually seize impactful vitals rather than future-proof
                supply chains. Uniquely exploit emerging niches via fully tested
                meta-services. Competently pursue standards compliant leadership
                skills vis-a-vis pandemic "Outside the Box" Thinking.
              </p>
            </div>
          </div>
          <div className="image">
            <img src={girl3} alt="" />
          </div>
        </div>
        <div className="solution">
          <div className="image changeOrder">
            <img src={girl4} alt="" />
          </div>
          <div className="solution-info">
            <div className="round">04</div>
            <div className="info-container">
              <h2 className="title">Avoid Contacts</h2>
              <p className="description">
                Continually seize impactful vitals rather than future-proof
                supply chains. Uniquely exploit emerging niches via fully tested
                meta-services. Competently pursue standards compliant leadership
                skills vis-a-vis pandemic "Outside the Box" Thinking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
