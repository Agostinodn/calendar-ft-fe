import React, { useState } from "react";
import { Register as RegisterModule } from "../../../../layout";
import { auth } from "../../../../shared/services/auth";

export default function RegisterAdminModule({
  children,
  handleOk,
  handleCancel,
  loadData,
  ...restProps
}) {
  const [userForm, setUserForm] = useState({});
  const [disabledButotn, setDisabledBUtton] = useState(false);
  const sendForm = (e) => {
    e.preventDefault();
    if (
      !userForm.username ||
      !userForm.email ||
      !userForm.password ||
      !userForm.repeat_password
    ) {
      console.log("Alcuni campi non sono Compilati");
    } else if (userForm.password !== userForm.repeat_password) {
      console.log("le password non corrispondono");
    } else {
      setDisabledBUtton(true);
      setTimeout(() => {
        setDisabledBUtton(false);
      }, 1000);
      auth
        .create(userForm)
        .then((res) => {
          loadData();
          handleOk();
        })
        .catch((e) => console.log(e));
    }
  };

  return (
    <RegisterModule {...restProps}>
      <RegisterModule.FormBox onSubmit={(e) => sendForm(e)}>
        <RegisterModule.Input
          type="text"
          placeholder={"Name*"}
          autocomplete="on"
          onChange={(e) =>
            setUserForm({ ...userForm, username: e.target.value })
          }
        ></RegisterModule.Input>
        <RegisterModule.Input
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
          onChange={(e) => setUserForm({ ...userForm, cf: e.target.value })}
        ></RegisterModule.Input>
        <RegisterModule.Input
          type="text"
          placeholder={"Cellulare"}
          autocomplete="on"
          onChange={(e) =>
            setUserForm({ ...userForm, cellulare: e.target.value })
          }
        ></RegisterModule.Input>
        <RegisterModule.Input
          type="text"
          placeholder={"indirizzo"}
          autocomplete="on"
          onChange={(e) =>
            setUserForm({ ...userForm, indirizzo: e.target.value })
          }
        ></RegisterModule.Input>

        <RegisterModule.Input
          type="email"
          placeholder={"Email*"}
          autocomplete="on"
          onChange={(e) => setUserForm({ ...userForm, email: e.target.value })}
        ></RegisterModule.Input>
        <RegisterModule.Input
          autoComplete={"on"}
          type="password"
          placeholder={"Password*"}
          autocomplete="on"
          onChange={(e) =>
            setUserForm({ ...userForm, password: e.target.value })
          }
        ></RegisterModule.Input>
        <RegisterModule.Input
          autoComplete={"on"}
          type="password"
          placeholder={"Repeat Password*"}
          onChange={(e) =>
            setUserForm({ ...userForm, repeat_password: e.target.value })
          }
        ></RegisterModule.Input>

        <RegisterModule.Button disabled={disabledButotn}>
          Send
        </RegisterModule.Button>
      </RegisterModule.FormBox>
    </RegisterModule>
  );
}
