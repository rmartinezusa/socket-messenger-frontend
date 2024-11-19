import { createBrowserRouter } from "react-router-dom";

import Root from "./layout/Root";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Inbox from "./components/inbox/Inbox";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Root />,
            children: [
                { path: "/", element: <Login /> },
                { path: "/register", element: <Register /> },
                { path: "/inbox", element: <Inbox /> },
            ],
        },
    ],
    {
        future: { 
            v7_startTransition: true,
            v7_skipActionErrorRevalidation: true,
            v7_partialHydration: true,
            v7_normalizeFormMethod: true,
            v7_fetcherPersist: true, 
            v7_relativeSplatPath: true,
        },
    },
);

export default router;