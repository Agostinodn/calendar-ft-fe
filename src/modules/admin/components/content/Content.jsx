import React from "react";
import {
  Container,
  InfoContainer,
  Serch,
  UserBox,
  SerchList,
  UserButton,
  CreateInput,
  ContainerAdminCreate,
} from "./style/Content";

export default function Content({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Content.InfoContainer = function ContentInfoListContainer({
  children,
  ...restProps
}) {
  return <InfoContainer {...restProps}>{children}</InfoContainer>;
};

Content.Serch = function ContentSerch({ children, ...restProps }) {
  return <Serch {...restProps}>{children}</Serch>;
};

Content.SerchList = function ContentSerchList({ children, ...restProps }) {
  return <SerchList {...restProps}>{children}</SerchList>;
};

Content.UserBox = function ContentUserBox({ children, ...restProps }) {
  return <UserBox {...restProps}>{children}</UserBox>;
};

Content.UserButton = function ContentUserButton({ children, ...restProps }) {
  return <UserButton {...restProps}>{children}</UserButton>;
};

Content.UserBox = function ContentUserBox({ children, ...restProps }) {
  return <UserBox {...restProps}>{children}</UserBox>;
};

Content.ContainerAdminCreate = function ContentContainerAdminCreate({
  children,
  ...restProps
}) {
  return <ContainerAdminCreate {...restProps}>{children}</ContainerAdminCreate>;
};

Content.CreateInput = function ContentCreateInput({ children, ...restProps }) {
  return <CreateInput {...restProps}>{children}</CreateInput>;
};
