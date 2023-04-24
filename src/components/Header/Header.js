import React from "react";
import logo from "../../assets/logo.png";
import style from "./Header.module.scss";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo lakledalbi" />
      </div>
      <nav>
        <ul>
          <li>professeur</li>
          <li>cours</li>
          <li>localisation</li>
          <li>tarifs</li>
          <li>contact</li>
          <li>langue</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
