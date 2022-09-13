import React from "react";
import {
  Container,
  InfoContainer,
  ButtonClosed,
  Navbar,
  ButtonLink,
} from "./style/Sider";

export default function Sider({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Sider.ButtonClosed = function SiderButtonClosed({ children, ...restProps }) {
  return <ButtonClosed {...restProps}>{children}</ButtonClosed>;
};

Sider.InfoContainer = function SiderInfoContainer({ children, ...restProps }) {
  return <InfoContainer {...restProps}>{children}</InfoContainer>;
};

Sider.Navbar = function SiderNavbar({ children, ...restProps }) {
  return <Navbar {...restProps}>{children}</Navbar>;
};

Sider.ButtonLink = function SiderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
