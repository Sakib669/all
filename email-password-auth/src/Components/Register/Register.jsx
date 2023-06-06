import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { app } from '../../firebase.config';
import { Link } from 'react-router-dom';


const Register = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [passwordShown, setShown] = useState(false)
    const [name, setName] = useState('');
    const auth = getAuth(app);


    const handleNameChange = (e) => {
        setName(e.target.value);
    }


    const handleSubmit = (event) => {
        // 1. prevent page refrest
        event.preventDefault();
        setSuccess('');
        setError('');
        // 2. collect form data
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please add atleast one uppercase');
            return;
        }
        else if (!/(?=.*[0-9])/.test(password)) {
            setError('Please add atleast one number');
            return;
        }
        else if (password.lenth < 6) {
            setError('Please enter at least 6 characters in your password');
            return;
        }
        // 3. create user in firebase
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const signedInUser = result.user;
                console.log(signedInUser);
                setError('');
                event.target.reset();
                setSuccess('User has created successfully');
                sendVerificationEmail(result.user);
                updateUserData(result.user, name);
            })
            .catch(err => {
                console.log('error', err.message);
                setError(err.message);

            })
    }

    const sendVerificationEmail = (user) => {
        sendEmailVerification(user)
            .then(result => {
                console.log(result);
                alert('Please verify your email address');
            })
    }

    const updateUserData = (user, name) => {
        updateProfile(user, {
            displayName: name
        })
        .then()
        .catch(error => {
            setError(error.message);
        })
    }


    const handleEmailChange = (event) => {
        // console.log(event.target.value)

    }

    const handlePasswordBlur = (event) => {
        // console.log(event.target.value);
    }

    const toggleShown = () => {
        setShown(!passwordShown);
    }

    return (
        <div className='w-50 mx-auto'>
            <h4>Please Register</h4>
            <form onSubmit={handleSubmit}>
                <input
                    required
                    type="text"
                    onChange={handleNameChange}
                    name='name'
                    className='w-50 mb-4 rounded ps-2'
                    id="name"
                    placeholder='Your Name'
                />
                <br />
                <input className='w-50 mb-4 rounded ps-2' onChange={handleEmailChange} type="email" name='email' id='email' placeholder='Your Email' required />
                <br />
                <input className='w-50 mb-4 rounded ps-2' onBlur={handlePasswordBlur} type={passwordShown ? 'text' : 'password'} name="password" id="password" placeholder='Your Password' required />
                <br />
                <input className='btn-primary btn' type="submit" value="Register" />
            </form>
            <p><small>Already have an accout? please <Link to='/login'>Login</Link></small></p>
            <p className='text-danger'>{error}</p>
            <p className='text-success'>{success}</p>
            <button className='btn btn-warning' onClick={toggleShown}>Show Password</button>
        </div>
    );
};

export default Register;