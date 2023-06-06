import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const RiceDetailsInside = () => {
    const data = useLoaderData();
    const navigate = useNavigate()
    const {strMealThumb, strMeal} = data.meals[0];
    return (
        <div>
            <img className='mx-auto w-50' src={strMealThumb} alt="" />
            <h2 className='text-4xl text-indigo-600 font-extrabold'>{strMeal}</h2>
            <button className='bg-red-400 p-2' onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
};

export default RiceDetailsInside;