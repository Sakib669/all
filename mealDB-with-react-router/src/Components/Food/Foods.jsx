import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FoodDetails from '../FoodDetails/FoodDetails';

const Foods = () => {

    const foods = useLoaderData();
    return (
        <div className='grid md:grid-cols-3 gap-5'>
            {
                foods.categories.map(food => <FoodDetails
                food={food}
                key={food.idCategory}></FoodDetails>)
            }
        </div>
    );
};

export default Foods;