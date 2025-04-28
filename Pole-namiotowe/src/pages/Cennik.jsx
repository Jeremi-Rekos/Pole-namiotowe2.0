import React from "react";
import "./Cennik.css";

function Cennik() {
  return (
    <main className="cennik">
      <section className="cennik-header">
        <h1>Cennik 2024</h1>
        <p>
          Poniżej przedstawiamy ceny za pobyt na naszym polu namiotowym.
          Wszystkie ceny podane są za dobę.
        </p>
      </section>

      <section className="cennik-table">
        <table>
          <thead>
            <tr>
              <th>Usługa</th>
              <th>Cena (za dobę)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Osoba dorosła</td>
              <td>25 zł</td>
            </tr>
            <tr>
              <td>Dziecko (3–12 lat)</td>
              <td>15 zł</td>
            </tr>
            <tr>
              <td>Namiot</td>
              <td>20 zł</td>
            </tr>
            <tr>
              <td>Samochód osobowy</td>
              <td>10 zł</td>
            </tr>
            <tr>
              <td>Kamper / Przyczepa</td>
              <td>30 zł</td>
            </tr>
            <tr>
              <td>Prąd (przyłącze)</td>
              <td>15 zł</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="cennik-info">
        <p>
          💧 Prysznic, WC oraz dostęp do zmywalni naczyń są{" "}
          <strong>wliczone w cenę</strong>.
        </p>
        <p>
          📅 Cennik obowiązuje w sezonie letnim od 1 czerwca do 30 września.
        </p>
        <p>
          📌 Dłuższy pobyt? Skontaktuj się z nami w celu indywidualnej wyceny!
        </p>
      </section>
    </main>
  );
}

export default Cennik;
