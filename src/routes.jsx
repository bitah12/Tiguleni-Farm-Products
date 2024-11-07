import { createBrowserRouter } from "react-router-dom";
import LogInPage from "./components/Login";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <LogInPage></LogInPage>
    }
])