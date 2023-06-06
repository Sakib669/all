import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import './Layout.scss';

const Layout = () => {
    return (
        <main className='App'>
            <Sidebar></Sidebar>
            <div className='page'>
                <span className='tags top-tags'></span>

                <Outlet></Outlet>


                <span className='tags bottom-tags'>&lt;/body</span>
                <br />
                <span className='bottom-tags-html'>&lt;/html</span>
            </div>
        </main>
    );
};

export default Layout;