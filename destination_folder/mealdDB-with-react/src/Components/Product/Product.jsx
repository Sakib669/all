import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const meals = props.meals;
    const addEventHandler = props.addEventHandler;
    const {
        strMealThumb,
        strMeal
    } = meals;
    // console.log(meals);
    return (
        <div className='product'>
            <img src={strMealThumb} alt="" />
            <p><a>{strMeal}</a></p>
            <button onClick={() => addEventHandler(strMeal)}>Add to Cart
            <FontAwesomeIcon icon={faCartShopping} />
            </button>
        </div>
    );
};

export default Product;