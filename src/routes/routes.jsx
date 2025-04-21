import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import ErrorPages from "../pages/ErrorPages";
import Favorites from "../pages/Favorites";
import About from "../pages/About";
import Details from "../pages/Details";
import Cart from "../pages/Cart";

export const router = createBrowserRouter([
    {
    path: "/",
    Component: MainLayouts,
    errorElement: ErrorPages,
    children: [
        {
            path: "/",
            Component: Home,
        },
        {
            path: "/Favorites",
            Component: Favorites,
        },
        {
            path: "/About",
            Component: About,
        },
        {
            path: "/Details",
            Component: Details,
        },
        {
            path: "/Cart",
            Component: Cart,
        },
    ]
    },
]);