import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";

export const router = createBrowserRouter([
    {
    path: "/",
    Component: MainLayouts,
    errorElement: <p>Error</p>,

    children: [
        {
            path: "/",
            element: <Home></Home>
        },
    ]
    },
]);