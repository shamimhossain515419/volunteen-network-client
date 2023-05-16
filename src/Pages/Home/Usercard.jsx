

const Usercard = ({ userdata,headDelete }) => {

     const { name,  _id, Date, title, images } = userdata;
    

     return (
          <div className="  relative shadow-md  m-2">
                <div className=" md:grid md:grid-cols-2    gap-4">
                    <div>
                         <img  className="  w-full" src={images} alt="" />
                    </div>
                     <div className=" relative">
                    <h4 className="  text-black text-base  font-semibold "> {title}</h4>
                    <p className=" text-bs">Name: {name}</p>
                      <h2 className=" text-bs">Date: {Date} </h2>
                      
                      <button onClick={ ()=>headDelete(_id)} className=" absolute  bottom-1   right-1 bg-[#0c89d1] text-white  px-2 py-1 rounded-md ">Cancel</button>
                     
                     </div>
                </div>
          </div>
     );
};

export default Usercard;