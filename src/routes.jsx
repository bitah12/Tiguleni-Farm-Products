import { createBrowserRouter } from "react-router-dom";
import SellerLayout from "./components/sellerComponents/SellerLayout";
import AdminLayout from "./components/adminComponents/AdminLayout";


export const router = createBrowserRouter([
    {
        path: "/seller/*",
        element: <SellerLayout></SellerLayout>},
        {
            path: "/admin/*",
            element: <AdminLayout></AdminLayout>}
])