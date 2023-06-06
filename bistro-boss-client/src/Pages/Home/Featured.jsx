import moment from "moment/moment";
import SectionTitle from "../../Components/SectionTitle";
import featuredImg from '../../assets/home/featured.jpg'

import  './Featured.css';

const Featured = () => {

    return (
        <section className='text-white pt-10 my-20 bg-fixed featured-section'>
            <SectionTitle
                subHeading={'Check it out'}
                heading={'FROM OUR MENU'}
            ></SectionTitle>
            <article  className="md:flex items-center justify-center pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-5'>
                    <p>{moment().format('MMMM D , yyyy')}</p>
                    <p className="uppercase">Where i get some </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repudiandae sed numquam voluptatum! Ex voluptate quibusdam porro quisquam quasi nulla facilis blanditiis praesentium. Repellat, consequatur nobis? Perspiciatis vitae impedit assumenda. Ex amet adipisci eius odio doloremque exercitationem dolor, itaque debitis laborum vitae expedita dolores quos placeat voluptatum minus. Quod, a.</p>
                    <button className="btn btn-outline border-0 border-b-4">Read More</button>
                </div>
            </article>
        </section>
    );
};

export default Featured;