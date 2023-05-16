

const AddvalunteenCard = () => {
    
const hanldSubmit=(event)=>{
      event.preventDefault();
      const from=event.target;
      
      const title=from.title.value
      const date=from.date.value
      const description=from.Description.value;
      const images=from.photo.value;
    const addevent={title,date,description,images};

       fetch('http://localhost:5000/volunteer',{
           method:'POST',
           headers:{
                'content-type':'application/json'
           },
           body:JSON.stringify(addevent)
       }).then(res=>res.json()).then(data=>{
           console.log(data);
       })


}
     return (
          <div>

               <form onSubmit={hanldSubmit} className="w-2/3  mx-auto p-4 bg-gray-100 rounded md:grid grid-cols-2 gap-8 shadow">
                    <div className="mb-4">
                         <label className="block text-gray-700" htmlFor="name">
                              Name
                         </label>
                         <input
                              className="w-full px-4 py-2 border border-gray-300 rounded"
                              type="text"
                              id="name"
                              name="title"
                         />
                    </div>

                    <div className="mb-4">
                         <label className="block text-gray-700" htmlFor="email">
                              Date
                         </label>
                         <input
                              className="w-full px-4 py-2 border border-gray-300 rounded"
                              type="date"
                              id="date"
                              name="date"
                         />
                    </div>
                    
                    <div className="mb-4">
                         <label className="block text-gray-700" htmlFor="Description">
                              Description
                         </label>
                         <textarea className="w-full px-4 py-2 border border-gray-300 rounded" name="Description" id="" cols="10" rows="4"></textarea>
                    </div>
                    
                    <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="Photo">
                              PhotoURL
                         </label>
                         <input className="w-full px-4 py-2 border border-gray-300 rounded" type="text" name="photo" id="" />

                    </div>


                    <button className="px-4 py-2 bg-blue-500 text-white rounded" type="submit">
                         Submit
                    </button>
               </form>

          </div>
     );
};

export default AddvalunteenCard;