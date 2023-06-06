import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import Navbar from '../Pages/Shared/Navbar';

const MainLayout = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('/login');
    const noHeaderFooter2 = location.pathname.includes('/register');
    return (
        <div>
            {
                noHeaderFooter ||
                noHeaderFooter2 ||
                <Navbar></Navbar>
            }
            <Outlet></Outlet>
            {
                noHeaderFooter ||
                noHeaderFooter2 ||
                <Footer></Footer>
            }
        </div>
    );
};

export default MainLayout;