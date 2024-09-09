import { selectUser, useUserStore } from "@/stores/userStore";
import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";

export const DashboardGuard = () => {
  const user = useUserStore(selectUser);
  if (user === null) return <Navigate to="/auth/login" />;
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Outlet />
    </Suspense>
  );
};
