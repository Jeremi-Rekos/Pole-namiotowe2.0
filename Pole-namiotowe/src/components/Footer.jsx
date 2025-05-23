import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-title">Camping Kacper 🏕️</h2>

        <div className="footer-columns">
          <div className="footer-column">
            <h4>📍 Lokalizacja</h4>
            <p>ul. Wczasowa 2</p>
            <p>64-150 Brenno</p>
          </div>

          <div className="footer-column">
            <h4>📞 Kontakt</h4>
            <p>tel. +48 663 794 686</p>
            <p>kacper.brenno@Camping.pl</p>
          </div>

          <div className="footer-column">
            <h4>🌲 O nas</h4>
            <p>Rodzinny klimat</p>
            <p>Blisko jeziora</p>
            <p>Przyjazny zwierzętom</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Camping Kacper. Wszystkie prawa
        zastrzeżone.
      </div>
    </footer>
  );
}

export default Footer;
