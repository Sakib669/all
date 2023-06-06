import React from 'react';

const Cards = ({card}) => {
    return (
        <div className='rounded-lg border border-indigo-500 p-4 w-48'>
            <img src={card.image} alt="" className='rounded-lg h-10 w-10' />
            <p className='text-[#474747] font-semibold my-2'>{card.jobType}</p>
            <p><small>{card.availableJobs} Jobs Available</small></p>
        </div>
    );
};

export default Cards;