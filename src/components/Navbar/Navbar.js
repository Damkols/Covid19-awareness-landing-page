import React from "react";
import logo from "../../assets/Logo.png";

const Navbar = () => {
  return (
    <div className="nav__container">
      <nav>
        <div className="brand">
          <div className="logo">
            <img src={logo} alt="" />
          </div>

          <div className="nav__toggle">
            <i></i>
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
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
