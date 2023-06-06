import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { notify, logIn, googleLogIn, githubLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location)
  const from = location.state?.from?.pathname || '/';

  const handleLogIn = (event) => {
    event.preventDefault();


    if (!email || !password) {
      notify('Please fill in all fields.');
    } else if (password.length < 6) {
      notify('Password must be at least 6 characters.');
    }
    logIn(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from);
      })
      .catch(error => {
        notify(error.message);
      })
  }

  const handleGoogleLogin = (event) => {
    googleLogIn()
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
      navigate(from);
    })
    .catch(err => {
      notify(err.message);
    })
  }

  const handleGithubLogin = (event) => {
    githubLogin()
    .then(result => {
      const loggedUser = result.user;
      navigate(from);
    })
    .catch(err => {
      notify(err.message);
    })
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <div className=" mt-6">
            <button onClick={handleGoogleLogin} className="btn bg-blue-500 hover:bg-blue-700 active:bg-blue-700 md:me-10"><FaGoogle className='me-2 ' /> Login With Google</button>
            <button onClick={handleGithubLogin} className="btn bg-slate-500 hover:bg-slate-700 active:bg-slate-700 "><FaGithub className='me-2' /> Login With Github</button>
          </div>
        </div>
        <form onSubmit={handleLogIn} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} value={email} className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" className="input input-bordered" value={password} onChange={(e) => setPassword(e.target.value)} />
              <label className="label">
                <p><small>New Here? <Link to='/register' className='underline text-indigo-600'>Register</Link></small></p>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )

}

export default Login;