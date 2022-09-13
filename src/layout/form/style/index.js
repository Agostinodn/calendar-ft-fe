import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 75px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RegisterContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 800px;
  min-height: 300px;
  margin: 0 auto;
  display: flex;
`;

export const FormBox = styled.form`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
`;

export const Text = styled.h1`
  font-family: inherit;
  text-align: center;
  padding: 14px;
  color: rgb(255, 68, 56);
`;

export const Alert = styled.p`
  font-family: inherit;
  width: 100%;
  font-size: 0.8rem;
  color: rgb(255, 68, 56);
  padding: 5px;
`;

export const Button = styled.button`
  width: 100px;
  padding: 10px;
  margin: 10px 0px;
  background-color: rgb(255, 68, 56);
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 10px;
`;

export const ButtonLink = styled(Link)`
  text-decoration: none;
  background-color: transparent;
  color: #fff;
  &:hover {
    text-decoration: underline;
    color: #f3f3f3;
    cursor: pointer;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 13px;
  margin: 10px 0px;
  border-radius: 10px;
  border: none;
  border: 1px solid rgb(255, 68, 56);
`;
