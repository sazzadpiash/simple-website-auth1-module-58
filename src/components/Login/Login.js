import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const loginHandler = (event) => {
        event.preventDefault();
        const userInfo = event.target;
        const email = userInfo.email.value;
        const pass = userInfo.pass.value;
        login(email, pass)
            .then(res => {
                // const userInfo = res.user;
                // setUser(userInfo);
                // console.log(userInfo);
                navigate('/')
            })
            .catch(error => {
                console.error(error.message);
            });
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Please Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={loginHandler} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='pass' type="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Login</button>
                            </div>
                            <Link className="btn btn-primary" to='/register'>Register Now</Link>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;