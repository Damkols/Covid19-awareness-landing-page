import React from "react";
import logo from "../../assets/Logo.png";
import "./Navbar.scss";
import { FiAlignJustify } from "react-icons/fi";
import { FiX } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="nav__container">
      <nav>
        <div className="brand">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
        </div>

        <ul>
          <li>
            <a href="#about">Overview</a>
          </li>
          <li>
            <a href="#contagion">Contagion</a>
          </li>
          <li>
            <a href="#symptoms">Symptoms</a>
          </li>
          <li>
            <a href="#solution">Prevention</a>
          </li>
          <li>
            <button>Contact</button>
          </li>
        </ul>
      </nav>

      <div className="nav__toggle">
        <FiAlignJustify />
        <FiX />
      </div>
    </div>
  );
};

export default Navbar;
