import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const CountryDetails = () => {
    const detail = useLoaderData();
    const navigate = useNavigate();
    const {name, flags, capital
    } = detail[0];

    return (
        <div className='text-rose-500'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={flags.png} />
                    <div>
                        <h1 className="text-5xl font-bold">
                            {name.common}
                        </h1>
                        <p className="py-5">
                            {capital}
                        </p>
                        <button onClick={() => navigate(-1)} className="btn btn-primary bg-rose-500 text-white hover:bg-rose-700 border-none">Go Back</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryDetails;