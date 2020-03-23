import React, {Component} from 'react';
import { Link, Route } from 'react-router-dom';
import CountryDetail from './CountryDetail/countryDetail';
import CountryList from './CountryList/countryList'
import Countries from './countries.json'
import './App.css';

class App extends Component {
  state = {
    allCountries: [...Countries],
    countryPicked: []
  }

  getCountry = countrySelected => {
    let countryList = countrySelected;
    this.setState({
      countryPicked: countryList
    })
  }

  getSecondCountry = secondCountrySelected => {
    let secondCountryList = this.state.allCountries.filter(country => country.cca3 === secondCountrySelected);
    this.setState({
      countryPicked: secondCountryList
    })
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <span className="navbar-brand"><Link style={{color: "white"}} to="/">WikiCountries</Link></span>
          </div>
        </nav>
        <div className="container">
          <div className="row"></div>
            <div className="col-5">
              <CountryList passedDownGetCountry={countrySelected => this.getCountry(countrySelected)}/>
            </div>
            <div className="col-7">
            {console.log(this.state.countryPicked)}
              <Route render={() => <CountryDetail {...this.state.countryPicked} passedDownSecondGetCountry={secondCountrySelected => this.getSecondCountry(secondCountrySelected)}/>}/>
            </div>
        </div>
      </div>
    )
  };
}

export default App;
