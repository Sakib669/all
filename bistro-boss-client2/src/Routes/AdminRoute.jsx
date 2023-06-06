import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/UseAuth';
import useAdmin from '../Hooks/UseAdmin';

const AdminRoute = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();
    const [isAdmin, isAdminLoading] = useAdmin();

    if(loading || isAdminLoading){
        return <progress className="progress w-full"></progress>
    }

    if(user && isAdmin){
        return children;
    }

    return <Navigate to='/' state={{from: location}}></Navigate>
};

export default AdminRoute;