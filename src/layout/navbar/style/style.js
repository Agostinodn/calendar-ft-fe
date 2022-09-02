import styled from "styled-components/macro";
import { Link } from "react-router-dom";
export const Header = styled.div`
  width: 100%;
  height: 75px;
  background-color: rgb(255, 68, 56);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonLink = styled(Link)`
  display: block;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  color: #fff;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  margin: 0 10px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #f40612;
    color: #fff;
  }
`;

export const Button = styled.button`
  display: block;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  color: #fff;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  margin: 0 10px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #f40612;
    color: #fff;
  }
`;

