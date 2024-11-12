import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const LoginPage = () => {
  return (<div>
    <Navbar/>
    <div className="flex justify-center items-center h-screen bg-white">

        <div className='bg-orange-500 p-8 rounded-l-lg shadow-lg w-full max-w-md'>
          <img src="" alt="Shopping cart" className="h-72 w-20" />
        </div>
     
        <div className="bg-white p-8 rounded-r-lg shadow-lg w-full max-w-md">
            <h1 className="text-2xl font-bold mb-4">Log In to Tiguleni</h1>
            <form>
                <div className="mb-5">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                    Email or Phone Number
                </label>
            <input
              type="text"
              id="email"
              name="email"
              className="rounded w-full py-3 px-4 text-gray-700"
              placeholder="Enter your email or phone number"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className=" border rounded w-full py-3 px-4 text-gray-700 "
              placeholder="Enter your password"
              required/>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded "
            >
              Log In
            </button>
            <a href="#" className=" font-bold text-sm text-blue-500 hover:text-blue-800">
              Forgot password?
            </a>
          </div>

          <div className="mt-8 text-center">
          <p className="text-gray-700">Don't have an account? 
          <Link to = "/SignUp">
            <a href="#" className="text-blue-500 hover:text-blue-800">
              Sign Up
            </a>
            
          </Link>
            </p>
        </div>

        </form>
        
      </div>
      <div className="absolute top-0 right-0 mt-4 mr-4">
          </div>
    </div>
    <Footer/>
  </div>
    
  );
};

export default LoginPage;
