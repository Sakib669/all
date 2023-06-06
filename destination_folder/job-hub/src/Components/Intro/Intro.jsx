import React from 'react';

const Intro = () => {

    return (
        <div className='mx-8 md:mx-0 flex md:flex-row flex-col items-center justify-between mb-32'>
            <div className='w-full'>
                <h2 className='text-5xl font-bold text-black'>
                One Step Closer To Your
                    <br /> 
                    <span className='text-indigo-500'>
                    Dream Job
                    </span>
                </h2>
                <p className='my-10'>
                    <small>
                        Explore thousands of job opportunities with all the
                        <br />
                        information you need. Its your future. Come find it. Manage all
                        <br />
                         your job application from start to finish.
                    </small>
                </p>
                <button className='bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white p-4 rounded-lg font-bold'>Get Started</button>
            </div>

            <img src="https://b989760.smushcdn.com/989760/wp-content/uploads/2022/09/P3OLGJ1.webp?lossy=1&strip=1&webp=1" alt="" className='md:w-2/4 w-11/12'/>
        </div>
    );
};

export default Intro;