import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./app";
import AboutMe from "./pages/aboutme";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";
import Resume from "./pages/resume";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <AboutMe />,
            },
            {
                path: "/portfolio",
                element: <Portfolio />,
            },
            {
                path: "/resume",
                element: <Resume />,
            },
            {
                path: "/contact",
                element: <Contact />,
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById("react-root")).render(
    <RouterProvider router={router} />
);
