import React, { useEffect, useState } from 'react';
import Jobs from '../Jobs/Jobs';

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [jobs2, setJobs2] = useState([]);
    useEffect(() => {
        fetch('second.json')
        .then(res => res.json())
        .then(data => {
            setJobs(data)
            setJobs2(data.slice(0,4))
        })
    }, [])
    const handleJobs = () => setJobs2(jobs);

    return (
        <div className='mt-32 w-full mx-0'>
            <div className='text-center mb-8'>
            <h3 className='mt-4 text-black font-semibold text-4xl'>Featured Jobs</h3>
            <p><small>Explore thousands of job opportunities with all the information you need. Its your future</small></p>
            </div>

            <div className='md:grid grid-cols-1 w-full md:grid-cols-2 gap-6'>
                {
                    jobs2.map(job => <Jobs
                    key={job.id}
                    job={job}></Jobs>)
                }
            </div>

            <div className='flex justify-center items-center'>
            <button onClick={handleJobs} className='bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white py-2 px-4 rounded font-bold mt-12 '>
                View All
            </button>
            </div>

        </div>
    );
};

export default FeaturedJobs;