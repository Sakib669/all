import SectionTitle from "../../Components/SectionTitle";
import MenuItem from "../Shared/MenuItem";
import useMenu from "../../Hooks/UseMenu";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');

    return (
        <section className="my-12">
            <SectionTitle
            heading={'From Our Menu'}
            subHeading={'Check it out'}></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuItem
                    key={item._id}
                    item={item}></MenuItem>)
                }
            </div>
            <button className="btn btn-outline border-0 border-b-4 my-10 block mx-auto">View Full Menu</button>
        </section>
    );
};

export default PopularMenu;