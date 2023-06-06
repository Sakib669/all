import { Outlet } from "react-router-dom";
import App from "../../App";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { ToastContainer } from "react-toastify";


const Layout = () => {
    return (
        <div className="min-w-[360px]" >
            <Navbar></Navbar>
            
            <ToastContainer></ToastContainer>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;