import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivetRoutes = ({children}) => {

    const { user, loading } = useContext(AuthContext);

    if(loading){
      return <span className="loading loading-spinner text-white ml-[670px]"></span>
    }

    if(user){
        return children;
    }

    return <Navigate to={'/login'}></Navigate>
};

export default PrivetRoutes;