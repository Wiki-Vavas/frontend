import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/home";
import Agents from "./pages/agents";
import Agent from "./pages/agent";
import Maps from "./pages/maps";
import Map from "./pages/map";
import Weapon from "./pages/weapon";

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
    },
    {
        path: "/maps",
        element: <Maps />
    },
    {
      path: "/maps/:name",
      element: <Map />
    },
    {
      path: "/weapons",
      element: <Weapon />
    }
]);