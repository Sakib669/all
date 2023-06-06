import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and Conditions</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cupiditate maxime distinctio incidunt odio tenetur voluptatibus in quibusdam nostrum obcaecati enim earum explicabo consequatur mollitia dolor unde consectetur, fugit illo.
            </p>
            <p>
                Go back to 
                <Link to='/register'>
                    Register
                </Link>
            </p>
        </div>
    );
};

export default Terms;