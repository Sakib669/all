import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../Hooks/UseCarts";

const Navbar = () => {
    const [cart] = useCart();

    const { logOut, user } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err.message,
                })
            })
    }

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Our Menu</Link></li>
        <li><Link to='/order/salad'>Order</Link></li>
        <li><Link to='/secret'>Secret</Link></li>
        <li>
            <Link to='/dashboard'>
                <button className="btn hover:bg-opacity-5 bg-opacity-5 border-none hover:border-none gap-2">
                    <FaShoppingCart />
                    <div className="badge badge-secondary">
                        +{cart.length || 0}
                    </div>
                </button>
            </Link>
        </li>
        {
            user ?
                <>
                    <li><button onClick={handleLogOut} className="btn btn-warning text-white text-center ">LogOut</button></li>
                    <li><p>{user.displayName}</p></li>
                </>
                :
                <li><Link to='/login' className="text-center">Login</Link></li>
        }
    </>

    return (
        <nav className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow items-center bg-slate-400 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal  items-center px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Get started</a>
            </div>
        </nav>
    );
};

export default Navbar;