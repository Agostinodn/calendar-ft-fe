import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export function PublicRoute({ user, to }) {
  console.log(user);
  if (user?.user?.role === "admin") return <Navigate to={"/admin"} />;
  if (user?.user?.role === "standard") return <Navigate to="/dashboard" />;
  return <Outlet />;
}

export function PrivateRoute({ user, to }) {
  return user?.user.role === "standard" ? <Outlet /> : <Navigate to={to} />;
}

export function AdminRoute({ user, to }) {
  return user?.user?.role === "admin" ? <Outlet /> : <Navigate to={to} />;
}
