/* eslint-disable react/prop-types */
import React from 'react';
import { FaThumbsUp } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';


const ChefCard = ({ chef }) => {
    // console.log(chef);
    const { name, picture, yearsOfExperience, numOfRecipes, likes, id } = chef;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={picture} /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-2xl">{name}</h2>
                    <div className='text-slate-500'>
                    <p>Years of experience: {yearsOfExperience}</p>
                    <p>Numbers of recipes: {numOfRecipes}</p>
                    <p className='flex items-center'><FaThumbsUp className='me-2' /> {likes}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/chef-details/${id}`}>
                            <button className="btn btn-primary">View Recipes</button>
                        </Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;