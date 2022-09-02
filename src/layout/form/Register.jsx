import React from "react";
import {
  RegisterContainer,
  Input,
  FormBox,
  Text,
  Button,
  Alert,
  ButtonLink,
  Container,
} from "./style";

export default function Register({ children, ...restProps }) {
  return <RegisterContainer {...restProps}>{children}</RegisterContainer>;
}

Register.Container = function RegisterContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};
Register.FormBox = function RegisterFormBox({ children, ...restProps }) {
  return <FormBox {...restProps}>{children}</FormBox>;
};

Register.Text = function RegisterText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Register.Alert = function RegisterAlert({ children, ...restProps }) {
  return <Alert {...restProps}>{children}</Alert>;
};

Register.Input = function RegisterInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};

Register.Button = function RegisterButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Register.ButtonLink = function RegisterButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
