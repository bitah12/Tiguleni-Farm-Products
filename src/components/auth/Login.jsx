import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import LoginImage from "/src/assets/loginImage.png";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "/src/store/authSlice.jsx";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {  isLoading } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
  
    try {
      const result = await dispatch(loginUser({ email, password }));
  
      if (result.type === "auth/loginUser/fulfilled") {
        const { role } = result.payload.user; // Access the role from user object
        navigate(role === "admin" ? "/admin" : role === "seller" ? "/seller" : "/");
      } else {
        setError("Invalid login credentials. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    }
  };
  
  

  return (
    <div className="">
      <Navbar />
      <div className="flex justify-center h-screen items-center  bg-white">
        <div className="h-96 rounded-l-lg shadow-lg w-96 max-w-md">
          <img
            src={LoginImage}
            alt="Shopping cart"
            className="h-full w-full rounded-sm shadow-lg"
          />
        </div>

        <div className="bg-white p-8 rounded-r-lg shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4">Log In to Tiguleni</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email or Phone Number
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded w-full py-3 px-4 text-gray-700"
                placeholder="Enter your email or phone number"
                required
              />
            </div>
            <div className="mb-5">
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border rounded w-full py-3 px-4 text-gray-700"
                placeholder="Enter your password"
                required
              />
            </div>

            {error && <p className="text-red-500 text-sm mt-4">{error}</p>}

            <div className="flex items-center justify-between">
              <button
                type="submit"
                disabled={isLoading}
                className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {isLoading ? "Logging in..." : "Log In"}
              </button>
              <a
                href="#"
                className="font-bold text-sm text-blue-500 hover:text-blue-800"
              >
                Forgot password?
              </a>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-700">
                Don't have an account?{" "}
                <Link to="/signup" className="text-blue-500 hover:text-blue-800">
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
        <div className="absolute top-0 right-0 mt-4 mr-4"></div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
