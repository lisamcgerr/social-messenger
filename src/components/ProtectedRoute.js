import React from 'react';
import { Redirect } from 'react-router-dom';

const ProtectedRoute = ({ children, user }) => {

    if (!user) {
        return (
                <Redirect to="/login" /> ||
                <Redirect to="/signup" />
        )
    }
    return children;
};

export default ProtectedRoute;
