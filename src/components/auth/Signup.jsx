import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "/src/store/authSlice";

const SignUpPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "buyer",
  });

  const [error, setError] = useState(null); // Define error state

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const result = await dispatch(registerUser(formData));
      if (result.type === "auth/registerUser/fulfilled") {
        const { role } = result.payload.user; // Access the role from user object
        navigate(role === "admin" ? "/admin" : role === "seller" ? "/seller" : "/");
      } else {
        setError("Registration failed. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    }
  };
  

  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex justify-center items-center ml-80 relative -left-44">
        <div className="bg-white grid md:grid-cols-2 gap-7 items-center py-16 px-8">
          <div className="bg-orange-500 p-10 w-80 max-h-full">
            <img
              src="https://img.freepik.com/premium-vector/smartphone-with-purchase-icon-screen-place-red-shopping-cart-with-unfolded-receipt-paper-draped-edge-shopping-cart-online-shopping-conceptvector-3d-isolated-orange-backgroud_425581-1.jpg?w=740"
              alt="Shopping basket"
              className="h-auto w-full"
            />
          </div>

          <div className="bg-white p-8 w-80 max-h-full">
            <h1 className="font-bold text-xl text-center mb-6">
              Create an Account
            </h1>
            <p className="text-gray-500 mb-6">Enter your details below</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="txt"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full border rounded-md px-4 py-2"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border rounded-md px-4 py-2"
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full border rounded-md px-4 py-2"
                />
              </div>
              <div>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full border rounded-md px-4 py-2"
                >
                  <option value="seller">Seller</option>
                  <option value="buyer">Buyer</option>
                </select>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-red-500 text-white rounded-md py-2 transition-colors hover:bg-red-600"
              >
                {isLoading ? "Creating Account..." : "Create Account"}
              </button>
              {error && (
                <p className="text-red-500 text-center mt-2">{error}</p>
              )}
              <div className="text-center mt-5">
                <span className="text-gray-500">Already have an account? </span>
                <Link to="/login" className="text-blue-800">
                  Log in
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUpPage;
