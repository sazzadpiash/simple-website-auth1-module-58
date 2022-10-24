import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';

const Register = () => {
    const { createUser, updateUser } = useContext(AuthContext);

    const register = (event) => {
        event.preventDefault();
        const userInfo = event.target;
        const displayName = userInfo.name.value;
        const email = userInfo.email.value;
        const pass = userInfo.pass.value;

        createUser(email, pass)
        .then(res => { 
            updateUser({displayName})
            .then(() => {
            // Profile updated!
            // ...
            })
            .catch((error) => {
            // An error occurred
            // ...
            });
            // console.log(user)
        })
        .catch((error) => {
            // const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorMessage);
        });
        
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Please Register Here</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={register} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' type="text" placeholder="name" className="input input-bordered" />
                            </div>
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
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;