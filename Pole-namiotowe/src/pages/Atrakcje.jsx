import React from "react";
import "./Atrakcje.css";

function Atrakcje() {
  const atrakcje = [
    { id: 1, ikona: "⛺", tytul: "Brąz +3" },
    { id: 2, ikona: "🏖", tytul: "Plaża blisko ośrodka" },
    { id: 3, ikona: "🌲", tytul: "Piękne lasy w okolicy" },
    { id: 4, ikona: "🔥", tytul: "Wiatki" },
    { id: 5, ikona: "🎾", tytul: "5 Poletek na terenie" },
    { id: 6, ikona: "🧘‍♂️", tytul: "Cisza i Spokój" },
  ];

  return (
    <main className="atrakcje">
      <section className="zielony-blok">
        <div className="lewa-kolumna">
          <h2 className="naglowek-bloku">To wszystko na Ciebie czeka!</h2>
          <ul className="lista-atrakcji">
            {atrakcje.map((a) => (
              <li key={a.id}>
                <span className="ikona">{a.ikona}</span>
                {a.tytul}
              </li>
            ))}
          </ul>
        </div>
        <div className="prawa-kolumna">
          <div className="miejsce-na-zdjecie">[Tu dodasz zdjęcie]</div>
        </div>
      </section>
    </main>
  );
}

export default Atrakcje;
