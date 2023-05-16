import { useEffect, useState } from "react";
import Velunteen from "./Velunteen";



const Home = () => {
const [volunteen,setvolunteen]=useState([])
  useEffect( ()=>{

     async function logJSONData() {
          const response = await fetch("http://localhost:5000/volunteer");
          const jsonData = await response.json();
          setvolunteen(jsonData);
        }
     
        logJSONData()  
  } ,[])

     return (
          <div>
               <div>
                    <h1 className=" text-4xl font-semibold text-center "> I grow by helping people in need.</h1>
                    <div>
                          <div className=' mt-6 w-1/4 mx-auto relative'>
                         <input className='     placeholder:mr-5  text-black relative' type="text" name="search" id=""  placeholder='searching....'/>
                           <button className=' text-white py-0 px-3 outline  border-none  bg-[#0a53f0]  absolute right-0'>Search</button>
                          </div>
                    </div>

               </div>

                <div className=" md:grid grid-cols-3 gap-5 my-6 ">
                    {
                         volunteen && volunteen.map(pepol=> <Velunteen key={pepol._id} volunteen={pepol} ></Velunteen>)
                    }
                </div>

          </div>
     );
};

export default Home;