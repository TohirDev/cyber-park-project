import routes from "@/routes";
import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export const RouteProvider = () => {
  const router = createBrowserRouter(routes);
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};
