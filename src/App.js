import React, { lazy, Suspense, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { NavbarModule } from "./modules";
import { PrivateRoute, PublicRoute, AdminRoute } from "./routes/guards";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "app/features/authSlice";

// LAZY IMPORT
const Calendar = lazy(() => import("./modules/calendar/Calendar"));
const Dashboard = lazy(() => import("./modules/dashboard/Dashboard"));
const AdminDashboard = lazy(() => import("./modules/admin/AdminDashboard"));
const Login = lazy(() => import("./modules/login/Login"));
const NotFound = lazy(() => import("./layout/notFound/NotFound"));

export default function App() {
  //GESTIONE AUTH TOKEN DA MIGLIORARE
  const { user } = useSelector((state) => ({ ...state.auth }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUser());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <NavbarModule user={user} />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<PublicRoute user={user} to={"/dashboard"} />}>
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
