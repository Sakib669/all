/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({card}) => {
    const {img , title, price, _id} = card;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>$: {price}</p>
    <div className="card-actions justify-end">
      <Link to={`/card-detail/${_id}`}>
        <button className="btn btn-primary">Book Now</button>
      </Link>
    </div>
  </div>
</div>
    );
};

export default Cards;