import React from 'react';
import './BookmarkedLists.css';
 
const BookmarkedLists = ({bookmarked}) => {
    return (
        <div className='bookmarked-lists-div'>
            <p>{bookmarked}</p>
        </div>
    );
};

export default BookmarkedLists;