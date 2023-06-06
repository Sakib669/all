import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';
import './Friends.css'

const Friends = () => {
    const friends = useLoaderData();
    // console.log(friends);
    return (
        <div>
            <h2>These are my friends {friends.length}</h2>
            <div className='friends-container'>
            {
                friends.map(friend => <Friend 
                friend={friend}
                key={friend.id}
                ></Friend>)
            }
            </div>
        </div>
    );
};

export default Friends;