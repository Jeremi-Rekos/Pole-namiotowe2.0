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
  const currentYear = today.getFullYear();
  const seasonStartThisYear = new Date(currentYear, 4, 1);

  const seasonStart =
    today >= seasonStartThisYear
      ? new Date(currentYear + 1, 4, 1)
      : seasonStartThisYear;

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
          <h2>Cisza, spokój i relaks!</h2>

          <p>
            Odkryj wyjątkowe miejsce nad jeziorem, gdzie natura spotyka się z
            aktywnym wypoczynkiem! Nasz camping to idealne miejsce na relaks,
            zabawę i niezapomniane chwile z rodziną lub przyjaciółmi. Czekają na
            Ciebie malownicze widoki, czysta woda i mnóstwo atrakcji dla
            każdego!
          </p>
        </div>
      </section>

      {/* Sekcja 2 */}
      <section data-aos="fade-up" className="section double">
        <div className="features-image">
          <img src={img5} alt="Zdjęcie przedstawiające atrakcje" />
        </div>
        <div className="double-text">
          <h2>Aktywne wakacje są najlepsze!</h2>

          <p>
            Marzysz o aktywnym wypoczynku na wodzie? Skorzystaj z naszej
            wypożyczalni sprzętu wodnego! Czekają na Ciebie kajaki, kanoe,
            rowerki wodne i łódki – idealne na rodzinne wycieczki, romantyczne
            chwile lub sportowe wyzwania. Poznaj jezioro z zupełnie nowej
            perspektywy i poczuj wolność na wodzie!
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
            <li>⛺ Ponad 50 parcel!</li>
            <li>🏖 Plaże blisko ośrodka</li>
            <li>🌲 Piękne lasy w okolicy</li>
            <li>🔥 Pomosty dla wędkarzy</li>
            <li>🎾 Liczne trasy rowerowe</li>
            <li>🧘 Cisza i Spokój</li>
          </ul>
        </div>
      </section>

      {/* Sekcja 4 – Dojazd */}
      <section className="section dojazd">
        <div className="img15">
          <img src={img15} alt="Zdjęcie przedstawiające atrakcje" />
        </div>
        <div className="dojazd-text">
          <p>
            Camping Kacper znajduje się w Brennie przy ulicy Wczasowej 2 w
            kierunku Brenno-Ostrów.
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2918.4986679963413!2d16.2090612!3d51.927006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4705c3fe5b8a8411%3A0x973a7fdcfe349153!2sCamping%20KACPER!5e1!3m2!1sen!2spl!4v1745942553231!5m2!1sen!2spl"
            width="100%"
            height="50%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa lokalizacji"
          />
        </div>
      </section>

      {/* Sekcja 5 – Liczniki */}
      <section className="liczniki">
        <div className="licznik">
          <h3>🏕️ Odwiedziło nas</h3>
          <CountUp end={30586} duration={5} />
        </div>

        <div className="licznik">
          <h3>📆 Dni do sezonu</h3>
          <CountUp end={daysLeft} duration={5} />
        </div>
      </section>
    </main>
  );
}

export default Home;
