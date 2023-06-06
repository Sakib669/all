import React from 'react';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useState } from 'react';
import useTitle from '../../../Hooks/useTitle';

const Login = () => {

    const {signIn} = useContext(AuthContext) ;
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location +', location);
    const from = location.state?.from?.pathname || '/category/0';
    useTitle('Login');

    const handleLogin = (event) => {
        event.preventDefault();
        setError('');

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            navigate(from, {replace: true});
        })
        .catch(err => {
            setError(err.message);
            console.log(err.message);
        })
    }

    return (
        <Container className='w-25 mx-auto'>
            <h3>Please Login</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" 
                    name='email' required
                    placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"
                    name='password' required
                    placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-secondary">
                            Don't Have an Account?
                        <Link to='/register'>
                            Register
                        </Link>
                </Form.Text>
                <br />
                <Form.Text className="text-success">
                        We'll never share your email with anyone else.
                </Form.Text>
                <br />
                <Form.Text className="text-danger">
                        {error}
                </Form.Text>
            </Form>
        </Container>
    ); 
        
};

export default Login;