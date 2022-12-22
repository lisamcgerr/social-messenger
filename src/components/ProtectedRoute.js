import React from 'react';
import { Redirect } from 'react-router-dom';

const ProtectedRoute = ({ children, user }) => {

    if (!user) {
        return <Redirect to="/login" />
    }
    return children;
};

export default ProtectedRoute;
