import React, { useContext, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FaStar, FaThumbsUp } from "react-icons/fa";
import { AuthContext } from '../../Providers/AuthProvider';
import 'react-toastify/dist/ReactToastify.css';

const ChefDetails = () => {
    const chef = useLoaderData();
    console.log(chef);
    const { name, picture, yearsOfExperience, numOfRecipes, likes, id } = chef;
    const { notify } = useContext(AuthContext);
    const [disableButton, setDisableButton] = useState(false);

    const handleNotify = () => {
        notify('the recipe is your favorite')
        setDisableButton(true);
    }

    return (
        <div className='mb-52 p-14'>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={picture} /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-2xl">{name}</h2>
                    <div className='text-slate-500'>
                    <p>Chef <span className='font-bold'>{name}</span> was born in Pasadena, California in 1912. After graduating from Smith College and working in advertising, she moved to France with her husband in 1948. There, she attended Le Cordon Bleu cooking school and became passionate about French cuisine. She co-authored the book "Mastering the Art of French Cooking," which became a bestseller and helped introduce French cooking to American audiences.</p>
                    <p>Years of experience: {yearsOfExperience}</p>
                    <p>Numbers of recipes: {numOfRecipes}</p>
                    <p className='flex items-center'><FaThumbsUp className='me-2' /> {likes}</p>
                    <div className="card-actions justify-end">
                    </div>
                    </div>
                </div>
            </div>



            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {
                    chef?.viewRecipes.map(recipe =>
                        <div key={recipe.recipeName} className="bg-white border rounded-lg shadow-lg">
                            <div className="px-4 py-4">
                                <h2 className="text-2xl font-bold flex items-center text-slate-500">
                                    {recipe.recipeName}
                                    <button onClick={handleNotify}
                                        disabled={disableButton} className='ms-auto text-orange-500'>
                                        <FaStar />
                                    </button>
                                </h2>
                                <p className="mt-2 text-gray-600">
                                    {recipe.description}
                                </p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ChefDetails;