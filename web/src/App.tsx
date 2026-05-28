import { createBrowserRouter, RouterProvider } from "react-router";

import CommonLayout from "@/layouts/CommonLayout";
import AuthRouteLayout from "@/layouts/AuthRouteLayout";
import NoAuthLayout from "@/layouts/NoAuthLayout";

import Home from "@/pages/Home";
import Error from "@/pages/Error";
import Login from "@/components/auth/Login";
import Signup from "@/components/auth/Signup";

const router = createBrowserRouter([
    {
        path: "/",
        element: <CommonLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                element: <NoAuthLayout />,
                children: [
                    {
                        element: <Login />,
                        path: "login"
                    },
                    {
                        element: <Signup />,
                        path: "signup"
                    }
                ]
            },
            {
                element: <AuthRouteLayout />,
                children: [
                    {
                        element: <h1>Hello, World!</h1>,
                        path: "secret"
                    }
                ]
            },
            {
                path: "*",
                element: <Error />
            },
        ]
    }
]);

export default function App() {
    return (
        <RouterProvider router={router} />
    );
}
