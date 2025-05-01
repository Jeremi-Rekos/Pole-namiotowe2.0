import React from "react";
import "./Atrakcje.css";

function Atrakcje() {
  return (
    <main className="atrakcje">
      <h1>Atrakcje w okolicy</h1>

      <div className="at-section">
        <h2>Plaże w okolicy</h2>
        <table>
          <tbody>
            <tr>
              <td>Plaża Breńska</td>
              <td>300 metrów</td>
            </tr>
            <tr>
              <td>Plaże</td>
              <td>e</td>
            </tr>
            <tr>
              <td>Brenno-Ostrów</td>
              <td>1000 metrów</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="at-section">
        <h2>Sklepy w okolicy</h2>
        <table>
          <tbody>
            <tr>
              <td>Biedronka</td>
              <td>1500 metrów</td>
            </tr>
            <tr>
              <td>Sklep Olivio</td>
              <td>200 metrów</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="at-section">
        <h2>Inne w okolicy</h2>
        <table>
          <tbody>
            <tr>
              <td>Brajan wymyśl coś</td>
              <td>1000 kilometrów</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default Atrakcje;
