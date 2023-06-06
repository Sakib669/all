import { Link } from "react-router-dom";
import Cover from "../Shared/Cover";
import MenuItem from "../Shared/MenuItem";

const MenuCategory = ({ items, title, img, btn }) => {
    console.log(title);
    return (
        <section className="pt-10">
            {  title && <Cover img={img} title={title} ></Cover>  }

            
            <div className="grid md:grid-cols-2 gap-10 mt-16">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}></MenuItem>)
                }
            </div>
            { btn && <Link to={`/order/${title}`}>
                <button className="btn btn-outline border-0 border-b-4 my-10 block mx-auto">ORDER YOUR FAVOURITE FOOD</button>
            </Link>}
        </section>
    );
};

export default MenuCategory;