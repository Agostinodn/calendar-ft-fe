import styled from "styled-components";
import {Link} from "react-router-dom"

export const RegisterContainer = styled.div`
  width: 100%;
  height: calc(100vh - 75px);
  min-height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormBox = styled.form`
width: 30%;
min-width: 300px;
padding: 20px;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background-color: rgb(255,68,56);
`

export const Text = styled.h1`
font-family: inherit;
text-align: center;
padding: 14px;
color: #fff;
`

export const Alert = styled.p`
font-family: inherit;
width: 100%;
font-size: 0.8rem;
color: #fff;
padding: 5px;
`

export const Button = styled.button`
width: 100px;
padding: 10px;
margin: 10px 0px;
background-color: #fff;
border: none;
cursor: pointer;
border-radius: 10px;

`

export const ButtonLink = styled(Link)`
text-decoration: none;
background-color: transparent;
color: #fff;
&:hover {
  text-decoration: underline;
  color: #f3f3f3;
  cursor: pointer;

}
`

export const Input = styled.input`
width: 100%;
padding: 13px;
margin: 10px 0px;
border-radius: 10px;
border: none;
`
