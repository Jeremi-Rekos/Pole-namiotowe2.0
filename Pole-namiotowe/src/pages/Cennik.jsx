import React from "react";
import "./Cennik.css";

function Cennik() {
  return (
    <main className="cennik">
      <section className="cennik-header">
        <h1>Cennik 2025</h1>
        <p>
          Poniżej przedstawiamy ceny za pobyt na naszym polu namiotowym.
          Wszystkie ceny podane są za dobę.
        </p>
      </section>

      <table className="cennik-table">
        <thead>
          <tr>
            <th></th>
            <th>Namiot</th>
            <th>Przyczepa</th>
            <th>Kamper</th>
            <th>Bus</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Postawienie</td>
            <td>10 zł (1-3 os.) / 14 zł (4-5 os.)</td>
            <td>28 zł</td>
            <td>16 zł</td>
            <td>18 zł</td>
          </tr>
          <tr>
            <td>Osoba</td>
            <td>22 zł</td>
            <td>22 zł</td>
            <td>22 zł</td>
            <td>22 zł</td>
          </tr>
          <tr>
            <td>Dzieci do 7 lat</td>
            <td>19 zł</td>
            <td>19 zł</td>
            <td>19 zł</td>
            <td>19 zł</td>
          </tr>
          <tr>
            <td>Dzieci do 2 lat</td>
            <td>Bezpłatnie</td>
            <td>Bezpłatnie</td>
            <td>Bezpłatnie</td>
            <td>Bezpłatnie</td>
          </tr>
          <tr>
            <td>Prąd</td>
            <td>18 zł</td>
            <td>18 zł</td>
            <td>18 zł</td>
            <td>18 zł</td>
          </tr>
        </tbody>
      </table>

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
