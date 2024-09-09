import { CustomRoutes } from "@/types";
import { lazy } from "react";

export const authRoutes: CustomRoutes[] = [
  {
    path: "login",
    Component: lazy(async () => await import("@/pages/auth/Login")),
  },

  {
    path: "register",
    Component: lazy(async () => await import("@/pages/auth/Register")),
  },
];
