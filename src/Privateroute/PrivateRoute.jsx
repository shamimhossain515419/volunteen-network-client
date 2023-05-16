import { useContext } from "react";
import { AuthContext } from "../Authontication/Authprovider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
 const {user,loading}=useContext(AuthContext);

 if(loading) {
      return <p className=" w-full h-screen flex justify-center items-center ">Loading....</p>
  }

 if(user?.email){
       return children
 }
  return <Navigate to={'/login'}></Navigate>
};

export default PrivateRoute;