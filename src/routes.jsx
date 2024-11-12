import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./components/Login";
import SignUpPage from "./components/SignUp";


export const router = createBrowserRouter([
    {
      

        path: "/",
        element: <LoginPage></LoginPage>,
    },

    {
        path:"/SignUp",
        element: <SignUpPage></SignUpPage>
    
    }
]);