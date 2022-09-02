import React from "react";
import { NavbarLayout } from "../../layout/";
import { useToken } from "../../shared/hooks";

export default function NavbarModule({ user }) {
  const { removeToken } = useToken();
  if (user) {
    return (
      <NavbarLayout>
        {user.user.role === "admin" ? (
          <NavbarLayout.ButtonLink to="/admin">Admin</NavbarLayout.ButtonLink>
        ) : null}

        <NavbarLayout.ButtonLink to="/dashboard">
          dashboard
        </NavbarLayout.ButtonLink>
        <NavbarLayout.ButtonLink to="/calendar">
          calendar
        </NavbarLayout.ButtonLink>
        <NavbarLayout.Button onClick={() => removeToken()}>
          logout
        </NavbarLayout.Button>
      </NavbarLayout>
    );
  }
}
