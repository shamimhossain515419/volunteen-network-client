import { Link } from "react-router-dom";


const Velunteen = ({ volunteen }) => {

     const { title, _id, images } = volunteen;

     return (
          <div>
               <div className=" bg-[#3F90FC] text-white rounded shadow">
                    <figure><img className=" h-60 w-full" src={images} alt="Shoes" /></figure>
                    <div className=" p-2">
                    <h2 className=" text-base font-medium"> {title}</h2>
                    <Link to={`/addvolunteen/${_id}`}>  <button className=" font-semibold mt-7 p-1 bg-[#db00f8] text-white w-full text-center block ">Add  Volunteer</button></Link>
                    </div>
               </div>

          </div>
     );
};

export default Velunteen;