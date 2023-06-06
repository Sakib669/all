import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [meals, setMeals] = useState([]);

    useEffect( () => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    } , []);

    const addEventHandler = (productName) => {
        console.log(productName);
        addToDb(productName);
    }

    useEffect(() => {
        

    }, [addEventHandler]);

    return (
        <div className='container'>
            <div className="product-container">
                {
                    meals.map(meal => <Product
                         meals={meal}
                         addEventHandler={addEventHandler}>
                         </Product>)
                }
            </div>
            <div className="cart-container">
                <Cart ></Cart>
            </div>
        </div>
    );
};

export default Shop;