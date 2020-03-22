import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
     <div>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">WikiCountries</a>
        </div>
      </nav>
      <div className="container">
        <div className="row"></div>
          <div className="col-5">
            <div className="list-group">
              <a className="list-group-item list-group-item-action" href="/ABW"><span role="img">🇦🇼</span> Aruba</a>
              <a className="list-group-item list-group-item-action" href="/AFG"><span role="img">🇦🇫</span> Afghanistan</a>
              <a className="list-group-item list-group-item-action" href="/AGO"><span role="img">🇦🇴</span> Angola</a>
              <a className="list-group-item list-group-item-action" href="/AIA"><span role="img">🇦🇮</span> Anguilla</a>
              <a className="list-group-item list-group-item-action" href="/ALA"><span role="img">🇦🇽</span> Åland Islands</a>
              <a className="list-group-item list-group-item-action" href="/ALB"><span role="img">🇦🇱</span> Albania</a>
              <a className="list-group-item list-group-item-action" href="/AND"><span role="img">🇦🇩</span> Andorra</a>
              <a className="list-group-item list-group-item-action" href="/ARE"><span role="img">🇦🇪</span> United Arab Emirates</a>
              <a className="list-group-item list-group-item-action" href="/ARG"><span role="img">🇦🇷</span> Argentina</a>
              <a className="list-group-item list-group-item-action" href="/ARM"><span role="img">🇦🇲</span> Armenia</a>
              <a className="list-group-item list-group-item-action" href="/ASM"><span role="img">🇦🇸</span> American Samoa</a>
              <a className="list-group-item list-group-item-action" href="/ATA"><span role="img">🇦🇶</span> Antarctica</a>
              <a className="list-group-item list-group-item-action" href="/FLK"><span role="img">🇫🇰</span> Falkland Islands</a>
              <a className="list-group-item list-group-item-action active" href="/FRA"><span role="img">🇫🇷</span> France</a>
              <a className="list-group-item list-group-item-action" href="/ZWE"><span role="img">🇿🇼</span> Zimbabwe</a>
            </div>
          </div>
          <div className="col-7">
            <h1>France</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Capital</td>
                  <td>Paris</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>551695 km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      <li><a href="/AND">Andorra</a></li>
                      <li><a href="/BEL">Belgium</a></li>
                      <li><a href="/DEU">Germany</a></li>
                      <li><a href="/ITA">Italy</a></li>
                      <li><a href="/LUX">Luxembourg</a></li>
                      <li><a href="/MCO">Monaco</a></li>
                      <li><a href="/ESP">Spain</a></li>
                      <li><a href="/CHE">Switzerland</a></li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
