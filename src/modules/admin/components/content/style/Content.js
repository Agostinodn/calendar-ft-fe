import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 75px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InfoContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

export const Serch = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0px;
  border: none;
  border: 1px solid lightgray;
`;

export const SerchList = styled.div`
  height: 300px;
  overflow: scroll;
  padding: 0 16px;
  border: 1px solid rgba(140, 140, 140, 0.35);
`;

export const UserButton = styled.button`
  width: auto;
  height: auto;
  padding: 5px;
  border-radius: 9px;
  margin-bottom: 10px;
  background-color: white;
  border: 1px solid black;
  cursor: pointer;
`;

export const UserBox = styled.div`
  width: 100%;
  height: auto;
  padding: 10px;
  border-radius: 9px;
  margin-bottom: 10px;
  background-color: lightgray;
  border: 1px solid black;
  cursor: pointer;
`;

export const ContainerAdminCreate = styled.form`
  width: 100%;
  height: auto;
  padding: 10px;
  margin: 10px 0px 20px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`;

export const CreateInput = styled.input`
  width: 100%;
  height: auto;
  padding: 5px;
  margin-bottom: 10px;
  background-color: lightgray;
  border: 1px solid black;
  cursor: pointer;
`;
