import React from 'react';
import Header from '../Pages/Home/Shared/Header/Header';
import Footer from '../Pages/Home/Shared/Footer/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftNav from '../Pages/Home/Shared/LeftNav/LeftNav';
import RightNav from '../Pages/Home/Shared/RightNav/RightNav';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../Pages/Home/Shared/NavigationBar/NavigationBar';

const Layout = () => {
    return (
        <div>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <Container>
                <Row>
                    <Col sm={3}>
                        <LeftNav></LeftNav>
                    </Col>

                    <Col sm={6}>
                        <Outlet></Outlet>
                    </Col>

                    <Col sm={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
                <Row>

                </Row>
            </Container>

            <Footer></Footer>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;