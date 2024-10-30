import { createBrowserRouter } from "react-router-dom";
import SellerLayout from "./components/sellerComponents/SellerLayout";


export const router = createBrowserRouter([
    {
        path: "/seller/*",
        element: <SellerLayout></SellerLayout>}
])