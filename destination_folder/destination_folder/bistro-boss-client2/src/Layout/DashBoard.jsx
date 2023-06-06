/* eslint-disable no-unused-vars */
import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaCalendarAlt, FaHome, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import useCart from "../Hooks/UseCarts";
import useAdmin from "../Hooks/UseAdmin";

const DashBoard = () => {
    const [cart] = useCart();

    // TODO: load data from the server to have dynamic isAdmin based on Data
    // const isAdmin = true;

    const [isAdmin] = useAdmin();

    return (
        <div className="drawer drawer-mobile ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80  text-slate-700 font-semibold bg-[#d1a054]">

                    {
                        isAdmin ? <>
                            <li><NavLink to='/dashboard/' ><FaHome />Admin Home</NavLink></li>
                            <li><NavLink to='/dashboard/addItem' ><FaUtensils />Add Item</NavLink></li>
                            <li><NavLink to='/dashboard/manageItems' ><FaWallet />Manage Items</NavLink></li>
                            <li><NavLink to='/dashboard/history' ><FaBook />Manage Bookings</NavLink></li>
                            <li><NavLink to='/dashboard/allusers' ><FaUsers />All Users</NavLink></li>
                            
                        </> : <>
                            <li><NavLink to='/dashboard/' ><FaHome />User Home</NavLink></li>
                            <li>
                                <NavLink to='/dashboard/mycart' ><FaShoppingCart /> My Cart
                                    <span className="badge badge-secondary">+{cart.length || 0}</span>
                                </NavLink>
                            </li>
                            <li><NavLink to='/dashboard/history' ><FaWallet />Payment History</NavLink></li>
                            <li><NavLink to='/dashboard/reservation' ><FaCalendarAlt />Reservations</NavLink></li>
                        </>
                    }

                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome /> Home</NavLink></li>
                    <li><NavLink to='/menu'><GiHamburgerMenu /> Menu</NavLink></li>
                    <li><NavLink to='/order/salad'>Order</NavLink></li>
                </ul>
            </div>
        </div>
    );
};
export default DashBoard;
