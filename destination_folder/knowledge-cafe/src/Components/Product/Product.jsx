import React from 'react';
import './Product.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {id, name, img, about, min, userImg} = props.userData;
    const addBookmarkHandler = props.addBookmarkHandler;
    const addReadTimeHandler = props.addReadTimeHandler;
    
    return (
        <div className='product-div'>
            <img src={img} />
            <div className="user-data-div">
                <div className='user-info-div'>
                    <img src={userImg} alt="" />
                    <p className="user-title">{name}
                    <br />
                    <span className="user-date text-secondary">
                    Mar 14 (4 Days ago)
                    </span>
                    </p>
                    
                </div>

                <p className='read-time text-secondary'>{min} min read <FontAwesomeIcon icon={faBookmark} onClick={()=> addBookmarkHandler(about)}/></p>
            </div>
            <h5 className='description' >{about}</h5>
            <p className='text-secondary'>
            #programming #begginers
            </p>

            <button onClick={() => addReadTimeHandler(min)} className='mark-btn'>
                Mark as read
            </button>
        </div>
    );
};

export default Product;