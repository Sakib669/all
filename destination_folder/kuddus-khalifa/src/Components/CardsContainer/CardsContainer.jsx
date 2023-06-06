import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Cards from '../Cards/Cards';

const CardsContainer = () => {
    const {cardData} = useContext(AuthContext);
    return (
        <div className='mx-6 md:mx-16 md:flex justify-between'>
            {
                cardData.map(card => <Cards
                key={card.id}
                card={card}
                ></Cards>)
            }
        </div>
    );
};

export default CardsContainer;