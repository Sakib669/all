
// import required modules
import { Pagination } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// images 
import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'
import slide5 from '../../assets/home/slide5.jpg'
import SectionTitle from "../../Components/SectionTitle";

const Category = () => {
    return (
        <section>
            <SectionTitle
            subHeading={'From 11.00 am to 9.00 pm'}
            heading={'Order Online'}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className="text-3xl uppercase text-center -mt-16 text-white shadow-lg
                ">Salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className="text-3xl uppercase text-center -mt-16 text-white shadow-lg
                ">Pizza's</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className="text-3xl uppercase text-center -mt-16 text-white shadow-lg
                ">Soup</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className="text-3xl uppercase text-center -mt-16 text-white shadow-lg
                ">Dessert's</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className="text-3xl uppercase text-center -mt-16 text-white shadow-lg
                ">Salad</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;