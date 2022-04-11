import React, { useState } from "react";
import logo from "../../assets/Logo.png";
import "./Navbar.scss";
import { FiAlignJustify } from "react-icons/fi";
import { FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navigation">
      <div className="navLogo">
        <a href="#/">Covid-19</a>
      </div>

      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="#/" onClick={() => setIsOpen(!isOpen)}>
          Overview
        </a>
        <a href="#Work" onClick={() => setIsOpen(!isOpen)}>
          Contagion
        </a>
        <a href="#Resume" onClick={() => setIsOpen(!isOpen)}>
          Symptoms
        </a>
        <a href="#Contact" onClick={() => setIsOpen(!isOpen)}>
          Prevention
        </a>
      </div>

      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`btn-mobile ${isOpen && "open"}`}
      >
        <div className="btn-mobile-line"></div>
        <div className="btn-mobile-line sm-line"></div>
      </div>
    </div>

    // <div className="nav__container">
    //   <nav>
    //     <div className="brand">
    //       <div className="logo">
    //         <img src={logo} alt="" />
    //       </div>
    //     </div>

    //     <ul>
    //       <li>
    //         <a href="#about">Overview</a>
    //       </li>
    //       <li>
    //         <a href="#contagion">Contagion</a>
    //       </li>
    //       <li>
    //         <a href="#symptoms">Symptoms</a>
    //       </li>
    //       <li>
    //         <a href="#solution">Prevention</a>
    //       </li>
    //       <li>
    //         <button>Contact</button>
    //       </li>
    //     </ul>
    //   </nav>

    //   <div className="nav__toggle">
    //     <FiAlignJustify />
    //     <FiX />
    //   </div>
    // </div>
  );
};

export default Navbar;
