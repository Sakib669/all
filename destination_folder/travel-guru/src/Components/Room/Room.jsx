import React from 'react';

const Room = ({room}) => {
    return (
        <div className='flex  gap-5 mt-5'>
            <img src={room.image} alt="" className='w-36 rounded'/>
            <div>
                <h3 className='font-semibold'>{room.title}</h3>
            </div>
        </div>
    );
};

export default Room;