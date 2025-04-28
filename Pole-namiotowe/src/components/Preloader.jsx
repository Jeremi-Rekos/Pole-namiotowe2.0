import React from "react";
import "./Preloader.css";
import logo from "../assets/galeria/logo5.png";

function Preloader() {
  return (
    <div className="preloader">
      <img src={logo} alt="Logo" className="preloader-logo" />
      <p>Ładowanie strony...</p>
    </div>
  );
}

export default Preloader;
