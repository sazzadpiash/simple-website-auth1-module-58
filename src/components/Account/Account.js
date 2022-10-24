import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';

const Account = () => {
    const {user} = useContext(AuthContext);
    if (user) {
        
    }
    return (
        <h1>
            This is Account Page {user.displayName}
        </h1>
    );
};

export default Account;