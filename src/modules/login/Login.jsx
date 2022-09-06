import React, { useState } from "react";
import { Register as RegisterModule } from "../../layout";
import { auth } from "../../shared/services/auth";
import { useToken } from "../../shared/hooks";
import { useNavigate } from "react-router-dom";

export default function Login({ children, ...restProps }) {
  const navigate = useNavigate();
  const [userForm, setUserForm] = useState({});
  // const [alertForm, setAlertForm] = useState();
  const { setToken } = useToken();

  const sendForm = (e) => {
    e.preventDefault();
    if (!userForm.email || !userForm.password) {
      console.log("Alcuni campi non sono Compilati");
    } else {
      auth
        .login(userForm)
        .then((res) => {
          console.log(res.message);
          setToken(res);
          navigate("/calendar");
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <RegisterModule.Container>
      <RegisterModule {...restProps}>
        <RegisterModule.FormBox onSubmit={(e) => sendForm(e)}>
          <RegisterModule.Text>Login</RegisterModule.Text>
          <RegisterModule.Input
            type="email"
            placeholder={"Email"}
            autocomplete="on"
            onChange={(e) =>
              setUserForm({ ...userForm, email: e.target.value })
            }
          ></RegisterModule.Input>
          <RegisterModule.Input
            type="password"
            placeholder={"Password"}
            autocomplete="on"
            onChange={(e) =>
              setUserForm({ ...userForm, password: e.target.value })
            }
          ></RegisterModule.Input>
          {/* {alertForm ? (
            <RegisterModule.Alert>{alertForm}</RegisterModule.Alert>
          ) : null} */}

          <RegisterModule.Button>Send</RegisterModule.Button>
          {/* <RegisterModule.ButtonLink to="/register">
            Register
          </RegisterModule.ButtonLink> */}
        </RegisterModule.FormBox>
      </RegisterModule>
    </RegisterModule.Container>
  );
}
