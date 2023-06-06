import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Country from '../Country/Country';

const Countries = () => {
    const countries = useLoaderData()
    // console.log(countries);
    return (
        <div className='grid grid-cols-3 px-5 mt-4 gap-5'>
            {
                countries.map(country => <Country key={country.ccn3}
                country={country}></Country>)
            }
        </div>
    );
};

export default Countries;