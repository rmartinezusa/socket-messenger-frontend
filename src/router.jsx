import { createBrowserRouter } from "react-router-dom";

import Root from "./layout/Root";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Root />,
            children: [
                { path: "login", element: <Login /> },
                { path: "register", element: <Register /> },
            ],
        },
    ],
    {
        future: { v7_startTransition: true, },
    }
);

export default router;