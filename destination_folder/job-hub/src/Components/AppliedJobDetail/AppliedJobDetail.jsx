import React from 'react';
import { Link } from 'react-router-dom';
import './AppliedJobDetail.css'

const AppliedJobDetail = ({ element }) => {
    return (
        <div className='border-[#E8E8E8] border rounded-lg mb-5 p-8'>
            <section className='items-center grid'>
                <article className='flex'>
                <img className='mr-3 rounded-lg' src={element.companyLogo} alt="" />
                <div>
                    <h3
                        className='font-bold text-[#474747] text-2xl'
                    >{element.jobPosition}</h3>
                    <h6>{element.companyName}</h6>
                    <button className='px-3  text-indigo-400 border border-indigo-400 rounded text-semibold mr-2'>{element.onsetOrRemote}</button>
                    <button className='px-3  text-indigo-400 border border-indigo-400 rounded text-semibold'>{element.fullOrPartTime}</button>
                    <div className="flex my-2 items-center">
                        <img src="../../../assets/Icons/Frame-4.png" className='w-6' alt="" />
                        <span className='mr-4 flex'>
                            <small>{element.address}</small>
                        </span>
                        <span className='flex'>
                            <img src="../../../assets/Icons/Frame.png" alt="" className="w-6" />
                            <small>Salary: 100k-150k</small>
                        </span>
                    </div>
                </div>
                </article>


                <button className='bg-gradient-to-r from-[#7E90FE] to-[#9873FF] h-1/4 text-white py-2 px-4 rounded font-bold'>
                <Link to={`/job-details/${element.companyName}`}>
                    View Details
                </Link>
            </button>

            </section>

        </div>
    );
};

export default AppliedJobDetail;