import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./components/Login";


export const router = createBrowserRouter([
    {
      

        path: "/",
        element: <LoginPage></LoginPage>
    }
])