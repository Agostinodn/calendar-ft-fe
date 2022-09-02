import React from "react";
import { Header, ButtonLink, Button } from "./style/style";

export default function Navbar({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
}

Navbar.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Navbar.Button = function HeaderButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

