/* eslint-disable no-unused-vars */
import { useContext, useEffect, useRef, useState } from 'react';
import loginImg from '../../assets/others/authentication.gif'
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet';
import SocialLogin from '../Shared/SocialLogin';



const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const captchaRef = useRef(null);
    const navigate = useNavigate();


    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [disabled, setDisabled] = useState(true);




    const onSubmit = data => {
        const email = data.email;
        const password = data.password
        const name = data.name;
        const photoURL = data.photoURL;

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(name, photoURL)
                    .then(() => {
                        const savedUser = {name, email};
                        console.log(savedUser);
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(savedUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    Swal.fire(
                                        'Register Successful'
                                    )
                                    navigate('/')
                                }
                            })
                    })
                    .catch(err => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: err.message,
                        })
                    })
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err.message,
                })
            })
    };





    return (
        <section>
            <Helmet>
                <title>Bistro Boss | Register</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row-reverse items-center justify-center">
                    <img src={loginImg} className="w-1/2 rounded-lg shadow-2xl" />
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    {...register("name", { required: true })}
                                    type="text" placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className='text-red-700'>This field is required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input
                                    {...register("photoURL", { required: true })}
                                    type="text" placeholder="photoURL" className="input input-bordered" />
                                {errors.photoURL && <span className='text-red-700'>This field is required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text"
                                    {...register("email", { required: true })}
                                    name='email'
                                    placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='text-red-700'>This field is required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"
                                    {...register("password", {
                                        required: true,
                                        minLength: 8,
                                        maxLength: 20,
                                        pattern: /^(?=.*[A-Za-z])[A-Za-z\d]{8,}$/
                                    })}
                                    placeholder="password"
                                    name='password'
                                    className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-00">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-700">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-700">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-700">Please set a strong password</p>}
                                <label className="label">
                                    <p>Already User ?
                                        <Link to='/login' className="underline text-yellow-500">Login</Link>
                                    </p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type='submit'
                                    className="btn btn-warning text-white" value='Register' />
                            </div>
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;