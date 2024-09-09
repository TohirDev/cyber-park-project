import { IndexRouteObject } from "react-router-dom";

export type CustomRoutes = Omit<IndexRouteObject, "children" | "index">;
