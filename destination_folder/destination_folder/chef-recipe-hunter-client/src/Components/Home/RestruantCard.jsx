/* eslint-disable react/prop-types */
import React from 'react';

const RestaurantCard = ({ name, photoUrl }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={photoUrl} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
      </div>
    </div>
  );
};

export default RestaurantCard;
