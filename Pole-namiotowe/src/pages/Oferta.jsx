import React from "react";
import "./Oferta.css";

function Oferta() {
  return (
    <main className="oferta">
      <section className="oferta-header">
        <h1>Nasza Oferta</h1>
        <p>
          Oferujemy idealne miejsce na wypoczynek dla osób ceniących spokój,
          naturę i rodzinny klimat. W naszym ośrodku znajdziesz przestrzeń dla
          namiotów, kamperów i przyczep kempingowych.
        </p>
      </section>

      <section className="oferta-boxes">
        <div className="box">
          <h3>⛺ Stanowiska namiotowe</h3>
          <p>
            Miejsca z bezpośrednim dostępem do energii i wody. Idealne na
            weekendowy wypad lub dłuższy pobyt.
          </p>
        </div>
        <div className="box">
          <h3>🚐 Stanowiska dla kamperów</h3>
          <p>
            Wydzielone miejsca parkingowe z dostępem do przyłącza prądu.
            Możliwość serwisowania pojazdu.
          </p>
        </div>
        <div className="box">
          <h3>🏕️ Przyczepy kempingowe</h3>
          <p>
            Komfortowe stanowiska dla przyczep – blisko sanitariatów i strefy
            wspólnej.
          </p>
        </div>
      </section>

      <section className="oferta-galeria">
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
      </section>

      <section className="oferta-lista">
        <h2>Dlaczego warto?</h2>
        <ul>
          <li>🌲 Cicha i zielona okolica</li>
          <li>🏖 Bezpośredni dostęp do jeziora</li>
          <li>🚻 Nowoczesne sanitariaty</li>
          <li>🧒 Plac zabaw dla dzieci</li>
          <li>🔥 Miejsce na ognisko i grill</li>
          <li>🧘‍♂️ Idealne miejsce na relaks</li>
        </ul>
      </section>
    </main>
  );
}

export default Oferta;
