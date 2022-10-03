import React from "react";
import { NavbarLayout } from "layout";
import { useToken } from "shared/hooks";

export default function NavbarModule({ user }) {
  const { removeToken } = useToken();
  if (user?.user) {
    return (
      <NavbarLayout>
        {user?.user?.role === "admin" && (
          <>
            <NavbarLayout.ButtonLink to="/admin">
              dashboard
            </NavbarLayout.ButtonLink>
          </>
        )}
        {user?.user?.role === "standard" && (
          <>
            <NavbarLayout.ButtonLink to="/dashboard">
              dashboard
            </NavbarLayout.ButtonLink>

            <NavbarLayout.ButtonLink to="/calendar">
              calendar
            </NavbarLayout.ButtonLink>
          </>
        )}
        {user?.user && (
          <NavbarLayout.Button onClick={() => removeToken()}>
            logout
          </NavbarLayout.Button>
        )}
      </NavbarLayout>
    );
  }
}
