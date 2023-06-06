import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { getShoppingCart } from '../../utilities/fakedb';
import Cards from '../Cards/Cards';

const RoomContainer = () => {
    const bookedRooms = []
    const {cardData}  = useContext(AuthContext);
    const storedRooms = getShoppingCart();
    // console.log(storedRooms, cardData);
    for(const card of cardData){
        for(const room in storedRooms){
            if(card.id == room){
                bookedRooms.push(card);
            }
        }
    }
    return (
        <div>
            <h2 className='text-4xl font-bold my-10 text-center text-green-400'>Your Booked Rooms</h2>
            <div className='flex justify-around mx-10'>
            {
                bookedRooms.map(card => <Cards
                key={card.id}
                card={card}></Cards>)
            }
        </div>
        </div>
    );
};

export default RoomContainer;