import React, { useState, useEffect } from "react";
import { Alert } from "antd";
import CalendarRender from "./components/CalendarRender";
import Modale from "./components/Modal";
import { anagrafica } from "../../shared/services/anagrafica";
import "antd/dist/antd.less";

export default function CalendarLayout() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form, setForm] = useState({});
  const [dbData, setDbData] = useState();
  const [alert, setAlert] = useState([
    {
      message: "Seleziona una data",
      type: "info",
    },
  ]);

  // DB CALL
  useEffect(() => {
    anagrafica
      .getAll()
      .then((res) => {
        setDbData(res.response[0].data);
        // console.log("res", res.response[0].data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  // FORM
  const handleDate = (value) => {
    setForm({
      ...form,
      date: value.format("DD-MM-YYYY"),
      day: value.date(),
      month: value.month(),
      year: value.year(),
    });
    setAlert([
      {
        message: value.format("DD-MM-YYYY"),
        type: "info",
      },
    ]);
  };

  // MODALE
  const handleOk = () => {
    setIsModalVisible(false);
    if (form?.date && form?.mode) {
      anagrafica
        .create(form)
        .then((res) => {
          setAlert([
            {
              message: res.message,
              type: res.type,
            },
          ]);
          anagrafica.getAll().then((res) => {
            setDbData(res.response[0].data);
          });
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      setAlert([
        {
          message: "Invio non riuscito",
          type: "error",
        },
      ]);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setForm({});
    setAlert([
      {
        message: "Seleziona una data",
        type: "info",
      },
    ]);
  };

  return (
    <>
      {alert.map((alertMessage, i) => (
        <Alert
          key={i}
          message={alertMessage.message}
          type={alertMessage.type}
          showIcon
        />
      ))}
      <CalendarRender
        handleDate={handleDate}
        dbData={dbData}
        setIsModalVisible={setIsModalVisible}
      />
      <Modale
        handleCancel={handleCancel}
        handleOk={handleOk}
        isModalVisible={isModalVisible}
        form={form}
        setForm={setForm}
      ></Modale>
    </>
  );
}
