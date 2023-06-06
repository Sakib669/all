import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';
import RightNav from '../Shared/RightNav/RightNav';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';

const NewLayout = () => {
    return (
        <div>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <Container>
                <Row>
                    <Col sm={9}>
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
        </div>
    );
};

export default NewLayout;