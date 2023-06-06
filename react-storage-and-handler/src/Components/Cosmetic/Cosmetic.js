import React from 'react';
import { addToDB, deleteShoppingCart, removeFromDB } from '../utilities/fakeDB';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic;
    // console.log(name, price);
    const addToCart = (id) => {
        addToDB(id, 1);
    }
    // const addToCartWithParam = () => addToCart(id);

    const removeFromCart = (id) => {
        removeFromDB(id);
    };

    const removeAllFromCart = () => deleteShoppingCart();

    return (
        <div>
            <h2>Buy this: {name}</h2>
            <p>Only at: {price}$</p>
            <p><small>It has id:{id}</small></p>
            {/* <button onClick={addToCartWithParam}>Add to Cart</button> */}
            <button onClick={() => addToCart(id)}>Add to Cart</button>
            <button onClick={() => removeFromCart(id)}>Remove</button>
            <button onClick={() => removeAllFromCart(id)}>Remove All</button>
        </div>
    );
};

export default Cosmetic;