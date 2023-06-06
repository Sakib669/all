import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToDB } from '../Utils/Utils';
import './JobDetails.css'

const JobDetails = () => {
    const {id} = useParams();
    const [jobDetails, setJobDetails] = useState([]);
    useEffect(()=> {
        fetch('/second.json')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            const detail = (data.find(j => j.companyName == id))
            setJobDetails(detail);
        })
    }, [])

    // console.log(id);
    // console.log(jobDetails);
    return (
        <div>

            <div className='section-title mt-10 mb-28 py-10'>
                <h3 className='mt-4 text-center  font-bold text-5xl'>Job Details</h3>
            </div>

            <div className="flex mx-20 text-[#757575]">
                <div className='w-3/4'>
                <div className='mb-6'>
                    <p>
                        <span className='text-[#1A1919] font-bold mr-2'>
                        Job Description:
                        </span>
                        {jobDetails.jobDescription}
                    </p>
                </div>
                <div className='mb-6'>
                    <p>
                        <span className='text-[#1A1919] font-bold mr-2'>
                        Job Responsibility:
                        </span>
                        {jobDetails.jobResponsibilities}
                    </p>
                </div>
                <div className='mb-6'>
                    <p className='text-[#1A1919] font-bold mb-4'>
                        Educational Requirements:
                    </p>
                    <p>
                        {jobDetails.educationalRequirements}
                    </p>
                </div>
                <div >
                    <p className='text-[#1A1919] font-bold mb-4'>
                        Experiences::
                    </p>
                    <p>
                        {jobDetails.experienceRequirements}
                    </p>
                </div>
                </div>
                <div className='1/4 p-5 bg-gradient-to-r from-[rgba(126, 144, 254, 0.1) 0%] to-[rgba(152, 115, 255, 0.1) 100%]'>
                    <div className='mb-8'>
                        <h3 className='font-bold'>Job Details</h3>
                        <hr className='mt-6 mb-3' />
                        <div className='flex items-center'>
                            <img src="../../../assets/Icons/Frame.png" alt="" />
                            <small>
                            <p>
                            <span className='text-[#474747] font-bold ml-2 mb-4'>Salary</span>
                             : 100K - 150K (Per Month)
                            </p>
                            </small>
                        </div>
                        <div className='flex items-center'>
                            <img src="../../../assets/Icons/Frame-1.png" alt="" />
                            <small>
                            <p>
                            <span className='text-[#474747] font-bold ml-2 mb-4'>Job Title</span>
                             : {jobDetails.jobPosition}
                            </p>
                            </small>
                        </div>
                    </div>
                    <div>
                        <h3 className='font-bold'>Contact Information</h3>
                        <hr className='mt-6 mb-3' />
                        <div>
                            <div className="flex items-center">
                                <img src="../../../assets/Icons/Frame-2.png" alt="" />
                                <p>
                                    <span className='text-[#434343] font-semibold ml-2'>Phone</span>
                                    {jobDetails.phone}
                                </p>
                            </div>
                            <div className="flex items-center">
                                <img src="../../../assets/Icons/Frame-3.png" alt="" />
                                <p>
                                    <span className='text-[#434343] font-semibold ml-2'>Email</span>
                                    {jobDetails.email}
                                </p>
                            </div>
                            <div className="flex items-center ">
                                <img src="../../../assets/Icons/Frame-4.png" alt="" />
                                <p>
                                    <span className='text-[#434343] font-semibold ml-2'>Address</span>
                                    {jobDetails.address}
                                </p>
                            </div>
                        </div>
                    </div>
                    <button onClick={()=> addToDB(jobDetails.jobPosition)} className='bg-gradient-to-r from-[#7E90FE] w-full mt-6 to-[#9873FF] text-white p-4 rounded-lg font-bold'>Apply Now</button>
                </div>

            </div>
        </div>
    );
};

export default JobDetails;