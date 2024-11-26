import { createBrowserRouter } from "react-router-dom";
import SellerLayout from "./components/sellerComponents/SellerLayout";
import AdminLayout from "./components/adminComponents/AdminLayout";
import ProductBuyNowPage from "./components/buyNow/ProductBuyNowPage";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home/Home";
import AboutUs from "./components/aboutus/AboutUs";
import LoginPage from "./components/auth/Login";
import SignUpPage from "./components/auth/Signup";
import ProductSearch from "./components/ProductSearch";
import Messaging from "./components/messaging/Messaging";
import Cart from "./components/ProductList/cart";
import FeedbackForm from "./components/Rates-and-Reviews/FeedbackForm";
import ProtectedRoute from "./routes/ProtectedRoute";
import CallbackPage from "./components/verifyPayments/CallbackPage";
import MyBag from "./components/myBag/MyBag";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/home", element: <Home /> },
  {
    path: "/seller/*",
    element: (
      <ProtectedRoute role="seller">
        <SellerLayout></SellerLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/*",
    element: (
      <ProtectedRoute role="admin">
        <AdminLayout></AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/productDetails/:productId",
    element: <ProductBuyNowPage></ProductBuyNowPage>,
  },
  { path: "/contact", element: <ContactUs /> },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },

  {
    path: "/signup",
    element: <SignUpPage></SignUpPage>,
  },

  { path: "/about", element: <AboutUs /> },
  {
    path: "/products",
    element: <ProductSearch />,
  },
  {
    path: "productDetails/:productId/message",
    element: (
      <ProtectedRoute>
        <Messaging />{" "}
      </ProtectedRoute>
    ),
  },
  {
    path: "/messages",
    element: (
      <ProtectedRoute>
        <Messaging />{" "}
      </ProtectedRoute>
    ),
  },
  { path: "cart", element: <Cart /> },
  { path: "productDetails/:productId/FeedbackForm", element: <FeedbackForm /> },
  {
    path: "callback",
    element: (
      <ProtectedRoute>
        {" "}
        <CallbackPage />
      </ProtectedRoute>
    ),
  },
  {path:"mybag",element:<MyBag/>}
  
]);
