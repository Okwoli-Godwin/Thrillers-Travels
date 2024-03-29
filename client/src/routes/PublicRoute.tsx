import { DashboardLayout } from "../Components";
import DashboardHome from "../Pages/DashboardHome";
import { createBrowserRouter } from "react-router-dom";
import Flights from "../Pages/Flights";
import Wallet from "../Pages/Wallet"
import Reports from "../Pages/Reports";
import Statistics from "../Pages/Statistics";
import Settings from "../Pages/Settings";

export const Element = createBrowserRouter([
    {
        path: "/",
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <DashboardHome />
            },
            {
                path: "/flights",
                element: <Flights />
            },
            {
                path: "wallet",
                element: <Wallet />
            },
            {
                path: "reports",
                element: <Reports />
            },
            {
                path: "statistics",
                element: <Statistics />
            },
            {
                path: "settings",
                element: <Settings />
            }
        ]
    }
])