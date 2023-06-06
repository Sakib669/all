import React from 'react';
import './ReadTime.css'

const ReadTime = ({timer}) => {
    return (
        <div className='read-time-div'>
            <h3>Spent time on read: {timer} min</h3>
        </div>
    );
};

export default ReadTime;