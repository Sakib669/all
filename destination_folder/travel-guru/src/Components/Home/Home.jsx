import React from 'react';
import { Link } from 'react-router-dom';
import Sajek from '../../assets/images/Sajek.png'
import Sreemongol from '../../assets/images/Sreemongol.png'
import Sundorbon from '../../assets/images/sundorbon.png';
import CoxBazar from '../../assets/images/Rectangle-1.png'
import { FaArrowRight } from "react-icons/fa";
import Intro from '../Intro/Intro';
const Home = () => {
    return (
        <section className='grid grid-cols-2 gap-5'>
            <Intro></Intro>


            <div className='grid grid-cols-3 gap-8'>
                <div className="card w-52 rounded-lg shadow-xl image-full hover:scale-105">
                    <figure ><img src={Sajek} />
                    </figure>
                    <div className='card-title z-10 absolute left-1/4 bottom-10 text-white text-xl p-2'>
                        <p>Sajek</p>
                    </div>
                </div>
                <div className="card w-52 rounded-lg shadow-xl image-full hover:scale-105">
                    <figure ><img src={Sreemongol} />
                    </figure>
                    <div className='card-title z-10 absolute left-1/4 bottom-10 text-white text-xl p-2'>
                        <p>Sreemongol</p>
                    </div>
                </div>
                <div className="card w-52 rounded-lg shadow-xl image-full hover:scale-105">
                    <figure ><img src={Sundorbon} />
                    </figure>
                    <div className='card-title z-10 absolute left-1/4 bottom-10 text-white text-xl p-2'>
                        <p>Sundorbon</p>
                    </div>
                </div>
                <div className="card w-52 rounded-lg shadow-xl image-full hover:scale-105">
                    <figure ><img src={CoxBazar} />
                    </figure>
                    <div className='card-title z-10 absolute left-1/4 bottom-10 text-white text-xl p-2'>
                        <p>Cox Bazar</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;