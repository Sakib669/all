import React from 'react';
import { Link } from 'react-router-dom';

const RiceDetails = ({meal}) => {
    // console.log(meal);
    return (
        <div className='border-solid border-purple-400 border-8 rounded-lg p-4'>
            <img src={meal.strMealThumb} alt="" />
            <h3 className="text-2xl">{meal.strMeal}</h3>
            <h6 className="font-bold">{meal.strCategory}</h6>
            <h6 className="font-bold">{meal.strArea}</h6>
            <Link to={`/rice/${meal.idMeal}`}>See Details</Link>
            <br />
            <button className='border-sky-500 border-solid border-2 p-2 rounded-lg hover:bg-sky-500 hover:text-white'><Link to={`/rice/${meal.idMeal}`}>See Details Inside Button</Link></button>
        </div>
    );
};

export default RiceDetails;