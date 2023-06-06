import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({price}) => {
    return (
        <div className='bg-indigo-400 mt-4 rounded-md p-4 flex flex-col'>
            <h2>
                <span className='text-5xl text-center font-extrabold text-purple-700'>{price.price}</span>
                <span className='text-center text-white text-2xl font-bold'>/mon</span>
            </h2>
            <h5 className="text-center my-6 text-2xl font-bold">{price.name}</h5>
            <p className='underline font-bold text-white'>Features: </p>
            {
                price.features.map((feature, index) => 
                <Feature
                key={index}
                feature={feature}></Feature>)
            }
            <button className='w-full hover:bg-green-700 bg-green-500 py-2 rounded-md text-white font-bold mt-auto'>Buy Now</button>
        </div>
    );
};

export default PriceCard;