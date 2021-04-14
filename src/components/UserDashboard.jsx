import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserProvider';
import SignIn from './SignIn';
import CurrentUser from './CurrentUser';

const UserDashboard = () => {
    const user = useContext(UserContext);

    return (
        <div>
            {user ? <CurrentUser {...user} /> : <SignIn/> }
        </div>
    )
};

export default UserDashboard;
