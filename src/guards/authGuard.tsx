import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export const AuthGuard = () => {
  console.log("auth guard");
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Outlet />
    </Suspense>
  );
};
