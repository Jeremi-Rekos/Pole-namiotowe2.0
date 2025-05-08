import React from "react";
import "./Oferta.css";
import galeria1 from "../assets/galeria/img1.jpg";
import galeria2 from "../assets/galeria/img2.jpg";
import galeria3 from "../assets/galeria/img3.jpg";
import galeria4 from "../assets/galeria/img4.jpg";
import galeria5 from "../assets/galeria/img5.jpg";
import galeria6 from "../assets/galeria/img6.jpg";

function OfertaGaleria() {
  const sections = [
    {
      left: {
        img: galeria1,
        text: "Spokojna przestrzeń namiotowa w otoczeniu natury.",
      },
      right: {
        img: galeria2,
        text: "Nowoczesne miejsce dla kamperów z dostępem do prądu.",
      },
    },
    {
      left: {
        img: galeria3,
        text: "Bezpieczny plac zabaw dla dzieci w cieniu drzew.",
      },
      right: {
        img: galeria4,
        text: "Duża wiata z grillem – idealna na chłodne wieczory.",
      },
    },
    {
      left: {
        img: galeria5,
        text: "Kajaki i rowerki wodne dostępne na miejscu.",
      },
      right: {
        img: galeria6,
        text: "Wspólna strefa relaksu z widokiem na jezioro.",
      },
    },
  ];

  return (
    <section className="oferta-galeria">
      {sections.map((section, index) => (
        <div className={`space sc-${index + 1}`} key={index}>
          {["left", "right"].map((side) => (
            <div className={`col-${side}`} key={side}>
              {side === "right" ? (
                <>
                  <div className="row-top">
                    <img src={section[side].img} alt={`Zdjęcie ${side}`} />
                  </div>
                  <div className="row-bot">
                    <p>{section[side].text}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="row-top">
                    <p>{section[side].text}</p>
                  </div>
                  <div className="row-bot">
                    <img src={section[side].img} alt={`Zdjęcie ${side}`} />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}

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

      <OfertaGaleria />

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
