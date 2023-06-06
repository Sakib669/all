import React from 'react';
import { Link } from 'react-router-dom';

const Jobs = ({job}) => {
    // console.log(job);
    return (
        <div className='border rounded-lg border-[#E8E8E8] p-10'>
            <img className='w-28 h-10' src={job.companyLogo} alt="" />
            <h3 className='font-bold text-[#474747] text-2xl'>{job.jobPosition}</h3>
            <p>{job.companyName}</p>
            <button className='px-3  text-indigo-400 border border-indigo-400 rounded text-semibold mr-2'>{job.onsetOrRemote}</button>
            <button className='px-3  text-indigo-400 border border-indigo-400 rounded text-semibold'>{job.fullOrPartTime}</button>
            <div className="flex my-2 items-center">
                <img src="../../../assets/Icons/Frame-4.png" className='w-6' alt="" />
                <span className='mr-4 flex'>
                    <small>{job.address}</small>
                </span>
                <span className='flex'>
                    <img src="../../../assets/Icons/Frame.png" alt="" className="w-6" />
                    <small>Salary: 100k-150k</small>
                </span>
            </div>
            <button className='bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white py-2 px-4 rounded font-bold'>
                <Link to={`/job-details/${job.companyName}`}>
                    View Details
                </Link>
            </button>
        </div>
    );
};

export default Jobs;