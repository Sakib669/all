import Navbar from "./Navbar";
import doctorImg from '../../assets/images/doctor.png'
import doctor2Img from '../../assets/images/doctor2.png'
import doctor3Img from '../../assets/images/doctor3.png'

const Header = () => {
    return (
        <header className=" h-[400px] md:pt-5 md:px-20 bg-[#07332F]">
            <Navbar></Navbar>
            <section className="text-white flex flex-col md:flex-row gap-10">
                <article className="space-y-10">
                    <h3 className="text-4xl font-bold">
                        Your Best Medical
                        <br />
                        Help Center
                    </h3>
                    <p>Lorem Ipsum is simply dummy text they are printing typesetting
                        <br />
                        has been the industry’s stardard.</p>
                    <button className="btn btn-warning font-bold text-white">All Service</button>
                </article>
                <div className="relative">
                    <img className="w-[183px] h-[183px] -skew-x-12 border-8 border-white absolute top-9 left-6" src={doctorImg} alt="" />
                    <img className="w-[183px] h-[183px] -skew-x-12 border-8 border-white absolute" src={doctor2Img} alt="" />
                    <img className="w-[183px] h-[183px] -skew-x-12 border-8 border-white absolute" src={doctor3Img} alt="" />
                </div>
            </section>

        </header>
    );
};

export default Header;