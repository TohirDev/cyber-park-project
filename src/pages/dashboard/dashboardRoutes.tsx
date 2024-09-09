import { CustomRoutes } from "@/types";
import { lazy } from "react";

export const dashboardRoutes: CustomRoutes[] = [
  {
    path: "",
    Component: lazy(async () => await import("@/pages/dashboard")),
  },
];
