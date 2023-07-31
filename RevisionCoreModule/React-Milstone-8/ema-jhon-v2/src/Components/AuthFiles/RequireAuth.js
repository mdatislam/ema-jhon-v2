import React from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({children}) => {
    const location = useLocation()
    const [user]=useAuthState(auth)
    if(!user){
        return <Navigate to='/Login' state={{from:location}} replace></Navigate>
    }
    return children
};

export default RequireAuth;