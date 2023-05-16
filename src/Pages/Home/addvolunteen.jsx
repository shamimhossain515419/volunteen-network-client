import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Authontication/Authprovider";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Addvolunteen = () => {
     const velunteenloadData = useLoaderData();
   const naviget=useNavigate()
     const {user}=useContext(AuthContext);
     
  const title=  velunteenloadData &&  velunteenloadData[0].title;
  const images= velunteenloadData && velunteenloadData[0].images;


      const email=user && user?.email
     const handleSubmit = (event) => {
          event.preventDefault();
          const from = event.target;
          const name = from.name.value;
          const Date = from.Date.value;
          const Desicription = from.Desicription.value;
          const Organize = from.Organize.value;
           const addvelunteen={name ,email ,Date,Desicription,Organize,title,images}
          fetch('http://localhost:5000/uservolunteer',
           {
                method:'POST',
                headers: {
                     'content-type':'application/json'
                },
                body: JSON.stringify(addvelunteen)

           })
          .then(res=>res.json())
          .then(data=>{
           console.log(data)
           toast.info('This is an informational message.');
           from.reset();
           naviget('/')
          })

      

     }

     return (
          <div>
               <form onSubmit={handleSubmit} className=" bg-white p-2    shadow-md my-3 w-2/3 mx-auto ">
                    <div className="mb-4">
                         <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                              full name
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
                              defaultValue={ user && user?.email }
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                         />
                    </div>
                    <div className="mb-4">
                         <label
                              htmlFor="date"
                              className="block text-gray-700 font-bold mb-2"
                         >
                              Date
                         </label>
                         <input
                              type="date"
                              id="Date"
                              name="Date"
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                         />
                    </div>
                    <div className="mb-6">
                         <label
                              htmlFor="Desicription"
                              className="block text-gray-700 font-bold mb-2"
                         >
                              Desicription
                         </label>
                         <input
                              type="text"
                              id="cDesicription" name="Desicription"
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                         />
                    </div>
                    <div className="mb-6">
                         <label
                              htmlFor="Organize books at the library."
                              className="block text-gray-700 font-bold mb-2"
                         >
                              Organize books at the library.
                         </label>
                         <input
                              type="text"
                              id="photo" name="Organize"
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                         />
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

export default Addvolunteen;