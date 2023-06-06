import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';

const JobCategory = () => {
    const [cards, setCards] = useState([]);
    useEffect(()=> {
        fetch('/third.json')
        .then(response => response.json())
        .then(data => setCards(data))
    }, [])

    return (
        <div>
            <div className='text-center mb-8'>
            <h3 className='mt-4 text-[#474747] font-semibold text-4xl'>Job Category</h3>
            <p><small>Explore thousands of job opportunities with all the information you need. Its your future</small></p>
            </div>
            <div className='flex items-center md:flex-row flex-col justify-between'>
                {
                    cards.map(card => <Cards
                    key={card.id}
                    card={card}></Cards>)
                }
            </div>
        </div>
    );
};

export default JobCategory;