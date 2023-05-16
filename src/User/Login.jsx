import { useContext } from "react";
import { AuthContext } from "../Authontication/Authprovider";
import { Link } from "react-router-dom";

import { FaGoogle } from 'react-icons/fa';
const Login = () => {
  const { SingIn, goolgesing } = useContext(AuthContext)
  const handleSubmit = (event) => {
    event.preventDefault();
    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;

    SingIn(email, password).then(result => {
      // const user = result.user
    

      // console.log(user);
      if (result.user) {
        from.reset();
      }
    }).catch(error => {
      console.log(error.massage);
    })

  }
  const handleGoolgesing = () => {
    goolgesing().then(result => {
      console.log(result.user);

    }).catch(error => {
      console.log(error);
    })
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className=" bg-white p-2   shadow-md my-3 w-2/3 mx-auto ">
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-bold mb-2"
          >
            email
          </label>
          <input
            type="email"
            id="email"
            name="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
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
        <div className="text-3xl my-2 text-[#a59505] cursor-pointer font-semibold">
          <FaGoogle onClick={handleGoolgesing}></FaGoogle>
        </div>
        <div>
          <p>Ragister   <Link className=" text-[#104bee] mr-3" to={'/ragister'}> Ragister</Link></p>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;