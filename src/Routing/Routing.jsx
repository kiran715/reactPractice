import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "../Components/Header";
import Content from "../Components/Content";
import Footer from "../Components/Footer";
import Contents from "../Components/Contents";
import NavBar from "./NavBar";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Header />,
    },
    {
        path: "/content",
        element: <Contents />,
    },
    {
        path: "/footer",
        element: <Footer />,
    },
    {
        path: "/content/:contentId",
        element: <Content />,
    },
]);
const Routing = () => {
    return (
        <div>
            <NavBar />
            <RouterProvider router={router} />
        </div>
    );
};

export default Routing;
