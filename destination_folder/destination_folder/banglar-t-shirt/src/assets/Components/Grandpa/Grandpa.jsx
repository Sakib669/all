import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Auntry from '../Aunty/Auntry';
import './Grandpa.css'

export const RingContext = createContext('gold');
export const MoneyContext = createContext(0);

const Grandpa = () => {
    const ring = 'diamond';
    const [money, setMoney] = useState(0);
    return (
        <div className='grandpa'>
            <h2>This is Grandpa</h2>
            <p>Has Money: {money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <RingContext.Provider value='golden ring'>
                    <section className='flex'>
                        <Father ring={ring}></Father>
                        <Uncle></Uncle>
                        <Auntry ring={ring}></Auntry>
                    </section>
                </RingContext.Provider>

            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;


/**
 * 1. create context and export
 * 2. create a Provider and pass a value
 * 3. use useContext to receive
*/