import { useContext } from "react"; // lowercase 'u' for useContext
import { AuthContext } from "../providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext); // useContext instead of UseContext
    const location = useLocation();

    if (loading) {
        return <process className="progress w-56"></process>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;
