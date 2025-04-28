import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
// import logo from "../assets/galeria/logo.png";
import logo2 from "../assets/galeria/logo5.png";

function Navbar() {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const isHome = location.pathname === "/";

  return (
    <header className={`navbar ${isHome ? "" : "navbar--small"}`}>
      <div className="overlay"></div>

      <img src={logo2} alt="Logo" className="logo" />
      <div className="navbar-content">
        <nav className="nav-links">
          <button
            className="dark-toggle"
            onClick={() => setDarkMode(!darkMode)}
            title="Zmień tryb"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
          <Link to="/">Start</Link>
          <Link to="/oferta">Oferta</Link>
          <Link to="/cennik">Cennik</Link>
          <Link to="/galeria">Galeria</Link>
          <Link to="/atrakcje">Atrakcje</Link>
          <Link to="/kontakt">Kontakt</Link>
        </nav>
      </div>
      <div className="slogan">
        <p className="line line1">Brenno,</p>
        <p className="line line2">
          miejsce gdzie <span>czas</span>
        </p>
        <p className="line line3">płynie wolniej.</p>
      </div>
    </header>
  );
}

export default Navbar;
