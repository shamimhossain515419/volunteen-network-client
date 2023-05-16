import { createBrowserRouter } from "react-router-dom";

import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import Ragister from "../User/Ragister";
import Login from "../User/Login";
import Addvolunteen from "../Pages/Home/addvolunteen";
import UserVolunteer from "../Pages/Home/userVolunteer";
import PrivateRoute from "../Privateroute/PrivateRoute";
import AddvalunteenCard from "../Pages/Home/AddvalunteenCard";


const Route = createBrowserRouter([
     {
          path: '/',
          element: <Main></Main>,
          children: [
               {
                    path: '/',
                    element: <Home></Home>
               },
               {
                    path:'/ragister',
                    element:<Ragister></Ragister>
               },
               {
                     path:'/login',
                     element:<Login></Login>
               },
               {
                     path:'/addeventCard',
                     element:<AddvalunteenCard></AddvalunteenCard>
               },
               {
                     path:'/myvolunteen',
                     element:<PrivateRoute> <UserVolunteer></UserVolunteer></PrivateRoute> ,
                    
               },
               {
                     path:'/addvolunteen/:id',
                     element: <PrivateRoute>  <Addvolunteen></Addvolunteen> </PrivateRoute> ,
                     loader: ({params})=> fetch(`http://localhost:5000/volunteer/${params.id}`)
               }
          ]
     }
])


export default Route;