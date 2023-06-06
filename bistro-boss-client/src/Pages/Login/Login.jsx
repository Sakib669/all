/* eslint-disable no-unused-vars */
import { useContext, useEffect,  useState } from 'react';
import loginImg from '../../assets/others/authentication1.png'
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import SocialLogin from '../Shared/SocialLogin';



const Login = () => {
    const { logIn } = useContext(AuthContext);
    const [disabled, setDisabled] = useState(true);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        logIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            Swal.fire(
                'Login Successful',
              )
            navigate(from, {replace: true});
        })
        .catch(err => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: err.message,
              })
        })

    }

    const handleValidateCaptcha = (event) => {
        const user_captcha_value = event.target.value;
        if (validateCaptcha(user_captcha_value) == true) {
            setDisabled(false);
        }

        else {
            setDisabled(true);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Captcha Does Not Match',
            })
        }
    }

    return (
        <section>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row items-center justify-center">
                    <img src={loginImg} className="w-1/2 rounded-lg shadow-2xl" />
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text"
                                    name='email'
                                    placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input type="text"
                                    name='captcha'
                                    onBlur={handleValidateCaptcha}
                                    placeholder='Type the text above'
                                    className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password"
                                    name='password'
                                    className="input input-bordered" />
                                <label className="label">
                                    <p>New Here ?
                                        <Link to='/register' className="underline text-yellow-500">Register</Link>
                                    </p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type='submit'
                                    disabled={disabled}
                                    className="btn btn-warning text-white" value='Login' />
                            </div>
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;