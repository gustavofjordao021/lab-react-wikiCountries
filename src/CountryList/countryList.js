import React, {Component} from 'react';
import Countries from '../countries.json'
import { Link } from 'react-router-dom';
import './countryList.css';

class CountryList extends Component {
    state = {
        countryList: [...Countries]
    }

    render() {
        return (
            <div className="list-group">
                {this.state.countryList.map((eachCountry, index) => {
                  return (
                    <span key={index} className="list-group-item list-group-item-action" onClick={() => this.props.passedDownGetCountry(eachCountry)}><Link to={`/${eachCountry.cca3}`}><span role="img" aria-label={eachCountry.name.common}>{eachCountry.flag}</span>{eachCountry.name.common}</Link></span>
                  )                
                })}
            </div>
        )
    }
}

export default CountryList;