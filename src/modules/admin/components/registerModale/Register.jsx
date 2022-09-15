import React, { useState } from "react";
import { Register as RegisterModule } from "../../../../layout";
import { auth } from "../../../../shared/services/auth";
import CodiceFiscale from "codice-fiscale-js";

export default function RegisterAdminModule({
  children,
  handleOk,
  handleCancel,
  loadData,
  ...restProps
}) {
  const [userForm, setUserForm] = useState({});
  const [disabledButotn, setDisabledBUtton] = useState(false);
  const [alertForm, setAlertForm] = useState();
  const [cfCode, setCfCode] = useState();

  const sendForm = (e) => {
    e.preventDefault();
    if (
      !userForm.username ||
      !userForm.email ||
      !userForm.password ||
      !userForm.repeat_password
    ) {
      setAlertForm("Alcuni campi non sono compilati");
    } else if (!cfCode) {
      setAlertForm("Codice fiscale errato");
    } else if (userForm.password !== userForm.repeat_password) {
      setAlertForm("Le password non corrispondono");
    } else {
      setDisabledBUtton(true);
      auth
        .create({
          ...userForm,
          cf: cfCode?.cf,
          birth: cfCode?.birthday,
          birthplace: cfCode?.birthplace,
          birthplaceProvincia: cfCode?.birthplaceProvincia,
          gender: cfCode?.gender,
        })
        .then((res) => {
          setAlertForm(res.message);
          loadData();
          setTimeout(() => {
            handleOk();
            setDisabledBUtton(false);
          }, 1000);
        })
        .catch((e) => {
          setAlertForm(e.message);
        });
    }
  };

  return (
    <RegisterModule {...restProps}>
      <RegisterModule.FormBox onSubmit={(e) => sendForm(e)}>
        <RegisterModule.Input
          type="text"
          placeholder={"Nome*"}
          required
          onChange={(e) =>
            setUserForm({ ...userForm, username: e.target.value })
          }
        ></RegisterModule.Input>

        <RegisterModule.Input
          type="text"
          placeholder={"Cognome*"}
          required
          onChange={(e) =>
            setUserForm({ ...userForm, surname: e.target.value })
          }
        ></RegisterModule.Input>

        <RegisterModule.Input
          type="text"
          required
          placeholder={"Codice Fiscale*"}
          onChange={(e) => {
            setCfCode(
              new CodiceFiscale(`${e.target.value.toUpperCase()}`).toJSON()
            );
          }}
        ></RegisterModule.Input>

        <RegisterModule.Input
          type="text"
          placeholder={"Cellulare"}
          onChange={(e) =>
            setUserForm({ ...userForm, cellulare: e.target.value })
          }
        ></RegisterModule.Input>

        <RegisterModule.Input
          type="text"
          placeholder={"indirizzo"}
          onChange={(e) =>
            setUserForm({ ...userForm, indirizzo: e.target.value })
          }
        ></RegisterModule.Input>

        <RegisterModule.Input
          type="email"
          placeholder={"Email*"}
          required
          onChange={(e) => setUserForm({ ...userForm, email: e.target.value })}
        ></RegisterModule.Input>

        <RegisterModule.Input
          autoComplete={"on"}
          type="password"
          required
          placeholder={"Password*"}
          onChange={(e) =>
            setUserForm({ ...userForm, password: e.target.value })
          }
        ></RegisterModule.Input>

        <RegisterModule.Input
          type="password"
          required
          placeholder={"Ripeti Password*"}
          onChange={(e) =>
            setUserForm({ ...userForm, repeat_password: e.target.value })
          }
        ></RegisterModule.Input>

        {alertForm ? (
          <RegisterModule.Alert>{alertForm}</RegisterModule.Alert>
        ) : null}

        <RegisterModule.Button disabled={disabledButotn}>
          Crea Utente
        </RegisterModule.Button>
      </RegisterModule.FormBox>
    </RegisterModule>
  );
}
