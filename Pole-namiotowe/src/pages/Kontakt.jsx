import React from "react";
import "./Kontakt.css";

function Kontakt() {
  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const imie = form.imie.value.trim();
    const email = form.email.value.trim();
    const wiadomosc = form.wiadomosc.value.trim();

    if (!imie || !email || !wiadomosc) {
      alert("Uzupełnij wszystkie pola!");
      return;
    }

    alert("Wiadomość została wysłana (symulacja)");
    form.reset();
  }

  return (
    <main className="kontakt">
      <h1 className="kontakt-naglowek">Kontakt</h1>

      <section className="kontakt-grid">
        <div className="lewa-kolumna">
          <h2>Dane kontaktowe</h2>
          <p>
            <strong>Camping Kacper</strong>
          </p>
          <p>ul. Polna 12</p>
          <p>00-000 Miasteczko</p>
          <p>📞 123 456 789</p>
          <p>✉️ kontakt@campingkacper.pl</p>

          <div className="mapa">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2918.4986679963413!2d16.2090612!3d51.927006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4705c3fe5b8a8411%3A0x973a7fdcfe349153!2sCamping%20KACPER!5e1!3m2!1sen!2spl!4v1745942553231!5m2!1sen!2spl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa lokalizacji"
            />
          </div>
        </div>

        <div className="prawa-kolumna">
          <h2>Formularz kontaktowy</h2>
          <form className="formularz" onSubmit={handleSubmit}>
            <label>
              Imię:
              <input
                type="text"
                name="imie"
                placeholder="Twoje imię"
                required
              />
            </label>
            <label>
              E-mail:
              <input
                type="email"
                name="email"
                placeholder="Twój e-mail"
                required
              />
            </label>
            <label>
              Wiadomość:
              <textarea
                name="wiadomosc"
                placeholder="Wpisz swoją wiadomość..."
                required
              ></textarea>
            </label>
            <button type="submit">Wyślij wiadomość</button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Kontakt;
