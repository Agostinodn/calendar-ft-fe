import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  flex: none;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  transition: 0.3s;
  /* width: ${({ children }) =>
    children?.props?.showSider ? "200px" : "75px"}; */
`;
export const InfoContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fbfbfb;
`;

export const ButtonClosed = styled.button`
  width: 30px;
  height: 30px;
  background-color: black;
  color: #fbfbfb;
  cursor: pointer;
  border: none;
  margin: 10px;
  border-radius: 30px;
  &::after {
    content: "X";
  }
`;

export const Navbar = styled.nav`
  width: 100%;
  height: auto;
  margin: 10px;
  display: flex;
  flex-direction: column;
`;

export const ButtonLink = styled(NavLink)`
  padding-top: 10px;
  cursor: pointer;
  text-decoration: none;
  color: gray;
  &:hover {
    color: #000;
  }
  &.active {
    color: #000;
  }
`;
