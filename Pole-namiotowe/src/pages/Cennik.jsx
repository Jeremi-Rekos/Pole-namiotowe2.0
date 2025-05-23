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
            <td>14 zł (1-3 os.) / 16 zł (4-5 os.)</td>
            <td>16 zł</td>
            <td>28 zł</td>
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
            <td>14 zł</td>
            <td>18 zł</td>
            <td>18 zł</td>
            <td>18 zł</td>
          </tr>
        </tbody>
      </table>

      <section className="cennik-info">
        <p>
          (Ikonka parkingu) parking na polu namiotowym jest bezpłatny wyłącznie
          dla gości z przyczepami stacjonarnymi (które stoją u nas cały rok),
          dla pozostałych- parking płatny 10 zł/doba,
        </p>
        <p>
          Postawienie przyczepy kempingowej na miesiąc:
          <br />
          - Od maja do sierpnia 300zł <br />- W pozostałych miesiącach 220zł
        </p>
        <p>
          Pobyt w Camping Kacper trwa od godziny 14 dnia przyjazdu – do godziny
          11 ostatniego dnia pobytu. Zapraszamy do wcześniejszej rezerwacji
          pobytu, ponieważ ilość miejsc na campingu jest ograniczona.
        </p>
        <p>opłata za zwierzę wynosi 12 zł/doba</p>
      </section>
    </main>
  );
}

export default Cennik;
