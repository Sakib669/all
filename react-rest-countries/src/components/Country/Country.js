import React from 'react';
import './Country.css';

const Country = (props) => {
    // console.log(props.country.maps);
    const {name, population, region, flags, area, maps} = props.country;
    return (
      <div className='country'>
        <h2>Name: {name.common}</h2>
        <h4>Population: {population}</h4>
        <p>Area: {area} km<sup>2</sup></p>
        <p><small>Region: {region}</small></p>
        <img src={flags.png} alt="" />
      </div>
    );
  }

export default Country;