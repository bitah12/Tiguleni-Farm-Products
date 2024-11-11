import React from 'react';

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">

        <div className='bg-orange-500 p-8 rounded-l-lg shadow-lg w-full max-w-md'></div>
     
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
          
        </form>
        
      </div>
      <div className="absolute top-0 right-0 mt-4 mr-4">
          </div>
    </div>
  );
};

export default LoginPage;
