import React from 'react';
import { FaBed } from "react-icons/fa";
import { ImManWoman } from "react-icons/im";
import { addToDb } from '../../utilities/fakedb';

const Cards = ({ card }) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl border border-blue-500">
                <figure><img src={card.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {card.title}
                    </h2>
                    <p>
                        {card.description}
                    </p>
                    <div className="card-actions  flex items-center">
                        <p className='flex items-center'>
                            <FaBed/>
                            {card.beds}
                        </p>
                        <p className='flex items-center'>
                            <ImManWoman/>
                            {card.persons}
                        </p>
                        <button className="btn btn-primary"
                        onClick={()=> addToDb(card.id)}>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;