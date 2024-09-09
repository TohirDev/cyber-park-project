import { AuthGuard } from "@/guards/authGuard";
import { DashboardGuard } from "@/guards/dashboardGuard";
import { authRoutes } from "@/pages/auth/authRoutes";
import { dashboardRoutes } from "@/pages/dashboard/dashboardRoutes";
import { Navigate, RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="dashboard" />,
  },

  {
    path: "dashboard",
    element: <DashboardGuard />,
    children: dashboardRoutes,
  },

  {
    path: "auth",
    element: <AuthGuard />,
    children: authRoutes,
  },
];

export default routes;
