import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
import { getTotal } from '../utilities/calculate';

const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([]);

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCosmetics(data))
    }, []);

    const total = getTotal(cosmetics);

    return (
        <div>
            <h1>This is Cosmtics</h1>
            <p>Money Needed {total}</p>
            {
                cosmetics.map(cosmetic => <Cosmetic                                   cosmetic={cosmetic}
                    key={cosmetic.id}
                ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;