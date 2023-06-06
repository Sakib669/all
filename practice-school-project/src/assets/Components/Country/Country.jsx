import React from 'react';
import { Link } from 'react-router-dom';

const Country = ({ country }) => {
    const { name, flags } = country;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl border text-green-600 border-green-400 py-3">
                <figure><img src={flags.png} alt="Shoes" className='rounded-lg' /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">
                        {name.common}
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <Link to={`/countries/${name.common}`}>
                        <button className="btn btn-primary bg-green-400 border-none hover:bg-green-700">
                            See Details
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Country;