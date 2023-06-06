import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import useTitle from '../../../Hooks/useTitle';

const Register = () => {

    const { createUser, setUser } = useContext(AuthContext);
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    const [accepted, setAccepted] = useState(false);
    useTitle('Register');

    const handleRegister = (event) => {
        event.preventDefault();
        setError('');

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;


        createUser(email, password)
        .then(result => {
            setUser(name);
            const createdUser = result.user;
            console.log(createdUser);
        })
        .catch(err => {
            setError(err.message);
            console.log(err.message);
        });
    }

    const handleAccepted = (event) => {
        setAccepted(event.target.checked);
    }

    return (
        <Container className='w-25 mx-auto'>
            <h3>Please Register</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" 
                    name='name' required
                    placeholder="Your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" 
                    name='photo' required
                    placeholder="Photo URL" />
                </Form.Group>

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
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" 
                    onClick={handleAccepted}
                    name="accept" 
                    label={<>Accept 
                        <Link to='/terms'>
                             Terms and Conditions
                        </Link></>} />
                </Form.Group>
                <Button disabled={!accepted} variant="primary" type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className="text-secondary">
                            Already Have an Account?
                        <Link to='/login'>
                            Login
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

export default Register;