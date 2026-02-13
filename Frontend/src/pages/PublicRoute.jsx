import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = () => {
    
    const { isAuthenticated, user } = useSelector((state) => state.auth);

    if(isAuthenticated && user) {
        if(user.role === 'OWNER') {
            return <Navigate to='/owner/dashboard' replace />;
        } 

        if(user.role === 'TRAINER') {
            if(user.gymStatus === 'ACTIVE') {
                return <Navigate to='/trainer/dashboard' replace />;
            } else {
                return <Navigate to='/trainer/join' replace />;
            }
        }

        if(user.role === 'MEMBER') {
            if(user.gymStatus === 'ACTIVE') {
                return <Navigate to='/member/dashboard' replace />;
            } else {
                return <Navigate to='/member/join' replace />;
            }
        }
    }

  return <Outlet />;
}

export default PublicRoute
