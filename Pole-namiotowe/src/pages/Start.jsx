import React from "react";
import "./Start.css";
import CountUp from "react-countup";
import img3 from "../assets/galeria/img3.jpg";
import img5 from "../assets/galeria/img5.jpg";
import img10 from "../assets/galeria/img10.jpg";
import img15 from "../assets/galeria/img15.jpg";
import imglam from "../assets/galeria/Łamanka.png";

function Home() {
  const today = new Date();
  const seasonStart = new Date(today.getFullYear(), 4, 1); // 1 czerwca
  const daysLeft = Math.max(
    0,
    Math.ceil((seasonStart - today) / (1000 * 60 * 60 * 24))
  );

  return (
    <main className="home">
      <div className="grey-box"></div>
      <div className="lamanka">
        <img src={imglam} alt="" />
      </div>
      {/* Sekcja 1 */}
      <section data-aos="fade-up" className="section intro">
        <div className="features-image">
          <img src={img3} alt="Zdjęcie przedstawiające atrakcje" />
        </div>
        <div className="intro-text">
          <h2>Tekst Zachęcający do pobytu</h2>
          <p>
            Zapraszamy do wyjątkowego miejsca wypoczynku. U nas znajdziesz
            ciszę, naturę i idealne warunki do relaksu. Wspaniała lokalizacja,
            przestrzeń i komfort!Zapraszamy do wyjątkowego miejsca wypoczynku. U
            nas znajdziesz ciszę, naturę i idealne warunki do relaksu. Wspaniała
            lokalizacja, przestrzeń i komfort!idealne warunki do relaksu.
            Wspaniała lokalizacja, przestrzeń i komfort!Zapraszamy do
            wyjątkowego miejsca wypoczynku. U nas znajdziesz ciszę, naturę i
            idealne warunki do relaksu. Wspaniała lokalizacja, przestrzeń i
            komfort!
          </p>
        </div>
      </section>

      {/* Sekcja 2 */}
      <section data-aos="fade-up" className="section double">
        <div className="features-image">
          <img src={img5} alt="Zdjęcie przedstawiające atrakcje" />
        </div>
        <div className="double-text">
          <h2>Kolejny Tekst Zachęcający do pobytu</h2>
          <p>
            W pobliżu znajduje się jezioro i miejsce na grilla, co sprawia że to
            idealne miejsce na wakacje z rodziną lub przyjaciółmi. W pobliżu
            znajduje się jezioro i miejsce na grilla, co sprawia że to idealne
            miejsce na wakacje z rodziną lub przyjaciółmi. W pobliżu znajduje
            się jezioro i miejsce na grilla, co sprawia że to idealne miejsce na
            wakacje z rodziną lub przyjaciółmi. W pobliżu znajduje się jezioro i
            miejsce na grilla, co sprawia że to idealne miejsce na wakacje z
            rodziną lub przyjaciółmi.
          </p>
        </div>
      </section>

      {/* Sekcja 3 – Zielone pole z ikonami */}
      <section className="section features">
        <div className="img10">
          <img src={img10} alt="Zdjęcie przedstawiające atrakcje" />
        </div>
        <div className="features-list">
          <h4>To wszystko na ciebie czeka!</h4>
          <ul>
            <li>⛺ Brąz +3</li>
            <li>🏖 Plaża blisko ośrodka</li>
            <li>🌲 Piękne lasy w okolicy</li>
            <li>🔥 Wiatki</li>
            <li>🎾 5 Poletek na terenie</li>
            <li>🧘 Cisza i spokój</li>
          </ul>
        </div>
      </section>

      {/* Sekcja 4 – Dojazd */}
      <section className="section dojazd">
        <div className="dojazd-text">
          <h5>Krótki opis jak dojechać</h5>
          <p>
            Dojazd jest prosty – kieruj się na jezioro i skręć w prawo za
            znakiem. Dokładna lokalizacja dostępna poniżej.
          </p>
        </div>
        <div className="img15">
          <img src={img15} alt="Zdjęcie przedstawiające atrakcje" />
        </div>
      </section>

      {/* Sekcja 5 – Liczniki */}
      <section className="liczniki">
        <div className="licznik">
          <h3>🏕️ Odwiedziło nas</h3>
          <CountUp end={302586} duration={3} />
        </div>

        <div className="licznik">
          <h3>📆 Dni do sezonu</h3>
          <CountUp end={daysLeft} duration={3} />
        </div>
      </section>
    </main>
  );
}

export default Home;
