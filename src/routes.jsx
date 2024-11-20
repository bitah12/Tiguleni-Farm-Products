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

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/seller/*",
    element: <SellerLayout></SellerLayout>,
  },
  {
    path: "/admin/*",
    element: <AdminLayout></AdminLayout>,
  },
  {
    path: "/productDetails:productId",
    element: <ProductBuyNowPage></ProductBuyNowPage>,
  },
  { path: "/contact", element: <ContactUs /> },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },

  {
    path: "/SignUp",
    element: <SignUpPage></SignUpPage>},
    
                {path:'/about',
                    element: <AboutUs/>
                },{
                  path:'/products',
                  element:<ProductSearch/>
                },
                {path:'productDetails:productId/message',
                  element:<Messaging/>
                },
                {path:'cart',
                  element:<Cart/>
                },
                {
                  path: 'productDetails:productId/FeedbackForm',
                  element: <FeedbackForm/>
                }
 
]);



