import React, { useState } from "react";
import { Register as RegisterModule } from "../../layout";
import { auth } from "../../shared/services/auth";

export default function Register({ children, ...restProps }) {
  const [userForm, setUserForm] = useState({});
  const [alertForm, setAlertForm] = useState();

  const sendForm = (e) => {
    e.preventDefault();
    if (
      !userForm.username ||
      !userForm.email ||
      !userForm.password ||
      !userForm.repeat_password
    ) {
      setAlertForm("Alcuni campi non sono Compilati");
    } else if (userForm.password !== userForm.repeat_password) {
      setAlertForm("le password non corrispondono");
    } else {
      auth
        .create(userForm)
        .then((res) => setAlertForm(res.message))
        .catch((e) => setAlertForm(e.message));
    }
  };

  return (
    <RegisterModule {...restProps}>
      <RegisterModule.FormBox onSubmit={(e) => sendForm(e)}>
        <RegisterModule.Text>Register</RegisterModule.Text>
        <RegisterModule.Input
          type="text"
          placeholder={"Name"}
          autocomplete="on"
          onChange={(e) =>
            setUserForm({ ...userForm, username: e.target.value })
          }
        ></RegisterModule.Input>
        {/* <RegisterModule.Input 
          type="text"
          placeholder={"Surname"}
          autocomplete="on"
          onChange={(e) =>
            setUserForm({ ...userForm, surname: e.target.value })
          }
        ></RegisterModule.Input>
        <RegisterModule.Input
          type="date"
          onChange={(e) => setUserForm({ ...userForm, birth: e.target.value })}
        ></RegisterModule.Input>
        <RegisterModule.Input
          type="text"
          placeholder={"Codice Fiscale"}
          autocomplete="on"
          onChange={(e) =>
            setUserForm({ ...userForm, cf: e.target.value })
          }
        ></RegisterModule.Input>
        <RegisterModule.Input
          type="text"
          placeholder={"Cellulare"}
          autocomplete="on"
          onChange={(e) => setUserForm({ ...userForm, cellulare: e.target.value })}
        ></RegisterModule.Input>
        <RegisterModule.Input
          type="text"
          placeholder={"indirizzo"}
          autocomplete="on"
          onChange={(e) => setUserForm({ ...userForm, indirizzo: e.target.value })}
        ></RegisterModule.Input>
        */}
        <RegisterModule.Input
          type="email"
          placeholder={"Email"}
          autocomplete="on"
          onChange={(e) => setUserForm({ ...userForm, email: e.target.value })}
        ></RegisterModule.Input>
        <RegisterModule.Input
          autoComplete={"on"}
          type="password"
          placeholder={"Password"}
          autocomplete="on"
          onChange={(e) =>
            setUserForm({ ...userForm, password: e.target.value })
          }
        ></RegisterModule.Input>
        <RegisterModule.Input
          autoComplete={"on"}
          type="password"
          placeholder={"Repeat Password"}
          onChange={(e) =>
            setUserForm({ ...userForm, repeat_password: e.target.value })
          }
        ></RegisterModule.Input>
        {alertForm ? (
          <RegisterModule.Alert>{alertForm}</RegisterModule.Alert>
        ) : null}
        <RegisterModule.Button>Send</RegisterModule.Button>
        <RegisterModule.ButtonLink to="/login">Login</RegisterModule.ButtonLink>
      </RegisterModule.FormBox>
    </RegisterModule>
  );
}
