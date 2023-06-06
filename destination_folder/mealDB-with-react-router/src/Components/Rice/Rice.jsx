import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RiceDetails from '../RiceDetails/RiceDetails';

const Rice = () => {
    const rices = useLoaderData()
    return (
        <div className='grid md:grid-cols-3 gap-5'>
            {
                rices.meals.map(meal => <RiceDetails
                meal={meal}
                key={meal.idMeal}></RiceDetails>)
            }
        </div>
    );
};

export default Rice;