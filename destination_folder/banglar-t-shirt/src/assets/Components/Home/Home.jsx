import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import './Home.css'
import toast from 'react-hot-toast';


const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart = tshirt => {
        const exists = cart.find(ts => ts._id === tshirt._id);
        if (exists) {
            toast('you have already added added')
        }
        else{
            const newCart = [...cart, tshirt];
            setCart(newCart);
        }
    }

    const handleRemoveFromCart = id => {
        const remainging = cart.filter(ts => ts._id !== id)
        setCart(remainging);
    }


    return (
        <div className='home-container'>
            <div className="t-shirts-container">
            {
                tshirts.map(tshirt => <Tshirt
                tshirt={tshirt}
                key={tshirt._id}
                handleAddToCart={handleAddToCart}
                ></Tshirt>)
            }
            </div>
            <div className="cart-container">
                <Cart
                cart={cart}
                handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;