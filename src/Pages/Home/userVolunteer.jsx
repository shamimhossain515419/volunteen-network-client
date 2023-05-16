
import Usercard from "./Usercard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Authontication/Authprovider";


const UserVolunteer = () => {
const {user}=useContext(AuthContext);
     const [userdata,seruserdata]=useState([])

      useEffect(()=>{
           fetch(`http://localhost:5000/uservolunteer?email=${user?.email}`, {
                method:"GET",
                 headers:{
                     authorization: `Bearer ${localStorage.getItem('token-volunteen')}`
                 }
           })
           .then(res=>res.json()).then(data=>{
               seruserdata(data)  
           })
     },[])




     const headDelete=(id)=>{
          console.log(id);  
          
          fetch(`http://localhost:5000/uservolunteer/${id}`, {
               method: 'DELETE'
          }).then(res=>res.json()).then(data=>{
                console.log(data);
                if(data.deletedCount >0){
                    const finduer = userdata.filter(user => user._id !== id);
                    seruserdata(finduer) 
                }
          })
        }


     return (
       <div>
            <h1 className=" text-3xl font-medium text-center  my-6"> My Volunteer </h1>   
       
        <div className=" md:grid  md:grid-cols-2 gap-3 mt-3" >
           {
               userdata.map(data=> <Usercard key={data._id}
                    headDelete={headDelete} userdata={data}></Usercard>)
           }
        </div>
       
       </div>
     );
};

export default UserVolunteer;