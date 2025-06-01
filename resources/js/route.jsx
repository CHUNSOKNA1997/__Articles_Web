// resources/js/routes.jsx
import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Comments from "./Pages/Comments";
import Layout from "./components/Layout";
import Index from "./Pages/Dashboard/Index";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/dashboard",
                element: <Index />,
            },
            {
                path: "comments",
                element: <Comments />,
            },
        ],
    },
]);
