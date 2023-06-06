import React from 'react';

const Intro = () => {
    return (
        <div>
            <div className='flex text-white bg-blue-500 px-20 items-center justify-between'>
                <img src="teacher-2.png" alt="" />
                <div>
                    <p className='text-6xl'>WELCOME TO
                        <span className='text-yellow-400 ml-2'>
                            সরকারি স্কুল
                        </span>
                    </p>
                    <p className='my-7'>
                        Let us think of education as the means of developing our greatest abilities, because in each of us there is a private hope and dream which, fulfilled, can be translated into benefit for everyone and greater strength for our nation. (John F. Kennedy)
                    </p>
                    <button className='bg-traparent border border-white rounded-lg px-10 py-4 text-xl font-semibold hover:bg-white hover:text-blue-400'>Take A Tour</button>
                </div>
            </div>
        </div>
    );
};

export default Intro;