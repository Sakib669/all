/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    const [asc, setAsc] = useState(true);
    const searchRef = useRef(null);
    const [search, setSearch] = useState('');
    
    useEffect(() => {
        fetch(`http://localhost:5000/services?search=${search}&sort=${asc ? 'asc' : 'desc'}`)
            .then(response => response.json())
            .then(data => setServices(data))
    }, [asc, search])

    const handleSearch = event => {
        console.log(searchRef.current.value);
        setSearch(searchRef.current.value);
    }

    return (
        <div>
            <div className='text-center mt-4 space-y-3'>
                <h3 className="text-3xl text-rose-500 font-bold">
                    Service
                </h3>
                <h2 className='text-5xl font-bold'>
                    Our Services
                </h2>
                <p className='text-slate-400'>
                    the majority have suffered alteration in some form, by injected humour, or randomised
                    <br />
                    words which don't look even slightly believable.
                </p>
                <div className="form-control">
                    <div className="input-group mx-auto block items-center justify-center flex">
                        <input type="text" placeholder="Search…" 
                        ref={searchRef}
                        className="input input-bordered" />
                        <button
                        onClick={handleSearch} className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
                <button
                    className='btn btn-info'
                    onClick={() => setAsc(!asc)}>Price: {asc ? ' High to Low' : ' Low to High'}</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;