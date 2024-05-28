import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/home";
import Agents from "./pages/agents";
import Agent from "./pages/agent";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/agents",
        element: <Agents />
    },
    {
        path: "/agent/:id",
        element: <Agent />
    }
]);