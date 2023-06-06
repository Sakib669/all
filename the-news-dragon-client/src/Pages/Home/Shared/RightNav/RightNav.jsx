import React from 'react';
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FaFacebook, FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../../assets/bg1.png'


const RightNav = () => {
    return (
        <div>
            <h4 className='text-dark fw-bold'>Login In</h4>
            <Button className='d-block mb-2 ' variant="outline-primary">
                <FaGoogle className='me-1' />
                Login with Google
            </Button>
            <Button variant="outline-secondary">
                <FaGithub className='me-1' />
                Login with Github
            </Button>

            <div className='my-5'>
                <h4 className='text-dark fw-bold'>Find Us on</h4>
                <ListGroup>
                    <ListGroup.Item className='text-primary'>
                        <FaFacebookF className='me-2'/>
                        Facebook
                    </ListGroup.Item>
                    <ListGroup.Item className='text-info'>
                        <FaTwitter className='me-2'/>
                        Twitter
                    </ListGroup.Item>
                    <ListGroup.Item className='text-danger'>
                        <FaInstagram className='me-2'/>
                        Instagram
                    </ListGroup.Item>
                </ListGroup>
            </div>

            <QZone></QZone>

            <div>
                <img src="" alt="" />
            </div>

        </div>
    );
};

export default RightNav;