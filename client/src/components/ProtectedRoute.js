import React from 'react'
import {Navigate} from "react-router-dom"
import { getItems } from "../utils/storage";

const ProtectedRoute = ({isAuthenticated,children}) => {
    const [token] = getItems(["token"]);

    if(!token) {
        return <Navigate to="/login" replace />
    }
    return children
};

export default ProtectedRoute;