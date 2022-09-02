import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export function PublicRoute({ user, to }) {
  return user?.user ? <Navigate to={to} /> : <Outlet />;
}

export function PrivateRoute({ user, to }) {
  return user?.user ? <Outlet /> : <Navigate to={to} />;
}

export function AdminRoute({ user, to }) {
  return user?.user?.role === "admin" ? <Outlet /> : <Navigate to={to} />;
}
