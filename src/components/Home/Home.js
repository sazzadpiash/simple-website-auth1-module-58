import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';

const Home = () => {
    const {user} = useContext(AuthContext);
    return (
        <h1 className='text-4xl font-semibold text-primary-content my-28'>
            Welcome {
            user ? user.displayName : ', Please Log In'
            }
        </h1>
    );
};

export default Home;