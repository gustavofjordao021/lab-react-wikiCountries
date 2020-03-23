import React, {Component} from 'react';
import { Link, Route } from 'react-router-dom';
import CountryDetail from './CountryDetail/countryDetail';
import CountryList from './CountryList/countryList'
import './App.css';

class App extends Component {
  state = {
    countryPicked: []
  }

  getCountry = countrySelected => {
    let countryList = countrySelected;
    this.setState({
      countryPicked: countryList
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
              <Route render={() => <CountryDetail {...this.state.countryPicked}/>}/>
            </div>
        </div>
      </div>
    )
  };
}

export default App;
