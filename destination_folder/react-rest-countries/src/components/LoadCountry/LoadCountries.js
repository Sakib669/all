import React from 'react';
import Country from '../Country/Country';
import { useEffect, useState } from 'react';
import './LoadCountries.css';

const LoadCountries = () => {

    const [countries, setCountries] = useState([]);
  
    useEffect(() => {
      fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
    }, [])
  
    return (
      <div>
        <h1> ওই মামুর গুঠা </h1>
        <h1>Visiting Every country of the world!!!</h1>
        <h3>Available Countries: {countries.length}</h3>
        <div className="countries-container">
        {
          countries.map(country => <Country
            country={country}
            key={country.cca3}
            ></Country>)
        }
        </div>
      </div>
    );
  }

export default LoadCountries;