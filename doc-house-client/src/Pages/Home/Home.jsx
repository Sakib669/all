import { FaLocationArrow, FaPhoneAlt, FaRegClock } from "react-icons/fa";
import doctorImg from '../../assets/images/doctor4.png'
import DoctorCategory from "./DoctorCategory";

const Home = () => {
    return (
        <div className="md:mx-20 mx-5">

            <section className="grid md:grid-cols-2 items-center space-x-5 my-10">
                <article>
                <img src={doctorImg} className="rounded-xl md:ms-auto h-[630px]" />
                </article>
                <article>
                    <h3 className="font-bold text-xl">
                        Our Services
                    </h3>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        <br />
                        accusantium doloremque laudantium, totam rem aperiam, eaque
                        <br />
                        ipsa quae ab illo inve ntore veritatis et quasi architecto beatae
                        <br />
                        vitae dicta sunt explicabo.
                    </p>
                    <div>
                        <DoctorCategory></DoctorCategory>
                    </div>
                    {/* react tabs */}

                </article>
            </section>

            <section className="md:flex  my-10 gap-10 space-y-5 justify-center">
                <div className="bg-[#07332F] text-white p-10 rounded-xl flex space-x-5 items-center">
                    <FaRegClock className="w-[50px] h-14" />
                    <div>
                        <h3 className="font-bold text-xl">Opening Hours</h3>
                        <p>
                            Open 9.00 am to 5.00pm
                            <br />
                            Everyday
                        </p>
                    </div>
                </div>
                <div className="bg-[#F7A582] text-white p-10 rounded-xl flex space-x-5 items-center">
                    <FaLocationArrow className="w-[50px] h-14" />
                    <div>
                        <h3 className="font-bold text-xl">Our Locations</h3>
                        <p>
                            Dhanmondi 17, Dhaka -1200,
                            <br />
                            Bangladesh
                        </p>
                    </div>
                </div>
                <div className="bg-[#07332F] text-white p-10 rounded-xl flex space-x-5 items-center">
                    <FaPhoneAlt className="w-[50px] h-14" />
                    <div>
                        <h3 className="font-bold text-xl">Contact Us</h3>
                        <p>
                            +88 01750 00 00 00
                            <br />
                            +88 01750 00 00 00
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;