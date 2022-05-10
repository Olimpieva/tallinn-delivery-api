
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ loggedIn }) {

    if (!loggedIn) {
        return <Navigate to="/signin" />
    };

    return (
        <Outlet />

    );
};

export default ProtectedRoute;