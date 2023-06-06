/* eslint-disable no-unused-vars */
import { Helmet } from "react-helmet";
import menuImg from '../../assets/menu/banner3.jpg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import PopularMenu from "../Home/PopularMenu";
import useMenu from "../../Hooks/UseMenu";
import SectionTitle from "../../Components/SectionTitle";
import MenuCategory from "./MenuCategory";
import Cover from "../Shared/Cover";
const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>


            <Cover img={menuImg} title="our menu"></Cover>
            {/* main cover */}
            <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>



            {/* dessert's */}
            <MenuCategory
            btn
            title='dessert'
            items={dessert}
            img={dessertImg}
            ></MenuCategory>

            {/* salad */}
            <MenuCategory
            btn
            img={saladImg}
            title='salad'
            items={salad}></MenuCategory>


            {/* pizza */}
            <MenuCategory
            btn
            img={pizzaImg}
            title='pizza'
            items={pizza}></MenuCategory>

            {/* soup */}
            <MenuCategory
            btn
            img={soupImg}
            title='soup'
            items={soup}></MenuCategory>
        </div>
    );
};

export default Menu;