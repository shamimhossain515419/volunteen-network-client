import { useContext, useState } from "react";
import { AuthContext } from "../Authontication/Authprovider";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../firebase.config";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";


const Ragister = () => {
     const { Ragiser ,goolgesing } = useContext(AuthContext)
     const [error, seterror] = useState('')

     const auth = getAuth(app);
     const handleSubmit = (event) => {
          event.preventDefault();
          const from = event.target;
          const email = from.email.value;
          const password = from.password.value;
          const name = from.name.value;
          const confirm_password = from.confirm.value;
          const photo = from.photo.value;


          if (password !== confirm_password) {
               return seterror("password not match");
          } else if (password.length < 6) {
               return seterror(" last 6 character ")
          }

          Ragiser(email, password).then(result => {
               console.log(result.user);
               updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photo
               }).then((result) => {
                    console.log(result.user);
               }).catch(error => {
                    console.log(error);
               });
               from.reset()
          }).catch(error => {
               console.log(error);
          })

     }

     const handleGoolgesing=()=>{
          goolgesing().then(result=>{
                console.log(result.user);
          }) .catch(error=>{
                console.log(error);
          })
     }
     return (
          <div>
               <form onSubmit={handleSubmit} className=" bg-white p-2    shadow-md my-3 w-2/3 mx-auto ">
                    <div className="mb-4">
                         <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                              Name
                         </label>
                         <input
                              type="text"
                              id="name"
                              name="name"
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                         />
                    </div>
                    <div className="mb-4">
                         <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                              Email
                         </label>
                         <input
                              type="email"
                              id="email"
                              name="email"
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                         />
                    </div>
                    <div className="mb-4">
                         <label
                              htmlFor="password"
                              className="block text-gray-700 font-bold mb-2"
                         >
                              Password
                         </label>
                         <input
                              type="password"
                              id="password"
                              name="password"
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                         />
                    </div>
                    <div className="mb-6">
                         <label
                              htmlFor="confirm-password"
                              className="block text-gray-700 font-bold mb-2"
                         >
                              Confirm Password
                         </label>
                         <input
                              type="password"
                              id="confirm-password" name="confirm"
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                         />
                    </div>
                    <div className="mb-6">
                         <label
                              htmlFor="confirm-password"
                              className="block text-gray-700 font-bold mb-2"
                         >
                              PhotoURL
                         </label>
                         <input
                              type="text"
                              id="photo" name="photo"
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                         />
                    </div>
                    <div className="text-3xl my-2 text-[#a59505] cursor-pointer font-semibold"> 
                         <FaGoogle onClick={handleGoolgesing}></FaGoogle>
                    </div>
                    <div>
                         <p className=" text-red-700 font-normal"> {error} </p>
                    </div>
                    <div>
                         <p> Ragister all ready create  <Link className=" text-[#104bee] mr-3" to={'/login'}>Login</Link> </p>
                    </div>
                    <button
                         type="submit"
                         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                         Register
                    </button>
               </form>
          </div>
     );
};

export default Ragister;