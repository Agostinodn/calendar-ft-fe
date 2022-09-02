import React, { lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { NavbarModule } from "./modules";
import { PrivateRoute, PublicRoute, AdminRoute } from "./routes/guards";
import jwt_decode from "jwt-decode";

// LAZY IMPORT
const Calendar = lazy(() => import("./modules/calendar/Calendar"));
const Dashboard = lazy(() => import("./modules/dashboard/Dashboard"));
const AdminDashboard = lazy(() => import("./modules/admin/AdminDashboard"));
const Register = lazy(() => import("./modules/register/Register"));
const Login = lazy(() => import("./modules/login/Login"));
const NotFound = lazy(() => import("./layout/notFound/NotFound"));

export default function App() {
  //GESTIONE AUTH TOKEN DA MIGLIORARE
  let user = localStorage.getItem("token");
  if (user) user = jwt_decode(user);

  return (
    <BrowserRouter>
      <NavbarModule user={user} />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<PublicRoute user={user} to={"/dashboard"} />}>
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
          </Route>
          <Route element={<PrivateRoute user={user} to={"/login"} />}>
            <Route index element={<Calendar />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/calendar" element={<Calendar />} />
          </Route>
          <Route element={<AdminRoute user={user} to={"/login"} />}>
            <Route exact path="/admin/*" element={<AdminDashboard />} />
          </Route>
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
