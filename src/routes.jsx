import { createBrowserRouter } from "react-router-dom";
import SellerLayout from "./components/sellerComponents/SellerLayout";
import AdminLayout from "./components/adminComponents/AdminLayout";
import ProductBuyNowPage from "./components/buyNow/ProductBuyNowPage";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home/Home";
import LoginPage from "./components/Login";
import SignUpPage from "./components/SignUp";



export const router = createBrowserRouter([
    {path:'/',element:<Home/>},{
        path: "/seller/*",
        element: <SellerLayout></SellerLayout>},
        {
            path: "/admin/*",
            element: <AdminLayout></AdminLayout>},
            {
                path: "/productDetails:productId",
                element: <ProductBuyNowPage></ProductBuyNowPage>},
                {path:'/contactus',
                    element: <ContactUs/>
                },
                {
      

                    path: "/",
                    element: <LoginPage></LoginPage>,
                },
            
                {
                    path:"/SignUp",
                    element: <SignUpPage></SignUpPage>
                
                }
])




