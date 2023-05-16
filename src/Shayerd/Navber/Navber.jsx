
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logos/Group 1329.png'
import { useContext } from 'react';
import { AuthContext } from '../../Authontication/Authprovider';
const Navber = () => {
     const { user, signOUT, loading } = useContext(AuthContext);



     const singout = () => {
          signOUT().then(result => {
               console.log(result);
               localStorage.removeItem('token-volunteen')
          }).catch(error => {
               console.log(error);
          })
     }

     return (
          <div className=' bg-white  shadow-md  md:flex  items-center  justify-between gap-4 p-3'>
               <div>
                    <div>
                         <img className=' w-full h-12' src={logo} alt="" />
                    </div>
               </div>

               <div className=' block md:flex gap-2 ml-11'>
                    <div className='  md:flex gap-4 block  mr-20'>
                         <NavLink to={'/'}>Home</NavLink>
                         <NavLink to={'/addeventCard'}>  Add event</NavLink>
                         <NavLink to={'/myvolunteen'}>My volunteer</NavLink>
                         <NavLink>Blog</NavLink>
                    </div>
                    <div className='  md:flex gap-3 block'>
                    
                          {
                           loading ? "":  <div>

                              {user ? <div className=' flex gap-2'>
                                   <img className='  w-10 h-10 rounded-full px-3 ' src={user.photoURL} alt="" />
                                   <button onClick={singout} className=' bg-[#0d71f3] text-white px-2  py-1  rounded '>Logout</button>
                              </div> : <div className=' flex gap-4 '>
                                   <Link to={'/ragister'}><button className=' bg-[#0d71f3] text-white px-2  py-1  rounded '>Ragister</button></Link>
                                   <Link to={'/admin'}><button className=' bg-[#111213] text-white px-2  py-1  rounded '>Admin</button></Link>

                              </div>
                              }
                         </div>
                         }
                    </div>
               </div>

          </div>
     );
};

export default Navber;