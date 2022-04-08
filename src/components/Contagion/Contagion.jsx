import React from "react";
import "./Contagion.scss";
import HumanContact from "../../assets/humanContact.png";
import Object from "../../assets/containedObject.png";
import airTransmission from "../../assets/airTransmission.png";

const Contagion = () => {
  const cards = [
    {
      img: airTransmission,
      title: "Air Transmission",
      description:
        "Objectively evolve tactical expertise before extensible initiatives.",
      alt: "Air Transmission",
      id: 1,
    },
    {
      img: HumanContact,
      title: "Human Contacts",
      description:
        "Washing your hands is one of the simplest ways you can protect.",
      alt: "Human Contacts",
      id: 2,
    },
    {
      img: Object,
      title: "Air Transmission",
      description:
        "Use the tissue while Sneezing. In this Way, You Can Protect Your Droplets.",
      alt: "object",
      id: 3,
    },
  ];

  return (
    <section className="contagion" id="contagion">
      <div className="info">
        <h4 className="subTitle">Covid-19</h4>
        <h2 className="title">Contagion</h2>
        <p className="description">
          Corona Viruses are a type of virus. There are many different kinds,
          and some cause disease. A newly identified type.
        </p>
      </div>
      <div className="content">
        <div className="cards">
          {cards.map((card) => (
            <div className="card" key={card.id}>
              <img src={card.img} alt={card.alt} />
              <div className="text">
                <h3 className="title">{card.title}</h3>
                <p className="description">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contagion;
