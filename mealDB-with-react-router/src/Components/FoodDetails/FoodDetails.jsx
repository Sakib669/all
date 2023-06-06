import React from 'react';

const FoodDetails = ({ food }) => {
    return (
        <div className='border-solid border-2 border-green-400 rounded-lg p-4'>
            <h3 className='text-3xl font-bold'>Catergory: {food.strCategory
            }</h3>
            <img src={food.strCategoryThumb
            } alt="" />
            <p><small>{food.strCategoryDescription
            }</small></p>
        </div>
    );
};

export default FoodDetails;