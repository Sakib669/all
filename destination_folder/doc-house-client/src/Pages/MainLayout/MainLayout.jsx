import { Outlet } from "react-router-dom";
import Header from "../Shared/Header";
import Navbar from "../Shared/Navbar";

const MainLayout = () => {
    return (
        <main>
            <Header>
            </Header>
            <Outlet></Outlet>
        </main>
    );
};

export default MainLayout;