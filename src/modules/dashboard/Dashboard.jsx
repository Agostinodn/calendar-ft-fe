import React, { useState, useEffect } from "react";
import { Row, Col, Card, Descriptions, Progress } from "antd";
import { anagrafica } from "shared/services/anagrafica";

export default function Dashboard() {
  const [user, setUser] = useState();
  const [dbData, setDbData] = useState([]);

  const [totWork, setTotWork] = useState(0);
  // const [workDay, setWorkDay] = useState(0);
  const [lavoro, setLavoro] = useState(0);
  const [ferie, setFerie] = useState(0);
  const [malattia, setMalattia] = useState(0);

  useEffect(() => {
    //GET USER BY LOCAL S.
    const localUser = JSON.parse(localStorage.getItem("user"));
    setUser(localUser);

    //GET DATA WORK MODE
    anagrafica
      .getAll()
      .then((res) => {
        setDbData(res?.response[0]?.data);

        // console.log("response ",response);
      })
      .catch((e) => console.error(e));
  }, []);

  useEffect(() => {
    if (dbData !== undefined) calcWork(dbData);
  }, [dbData]);

  const calcWork = (data) => {
    let giorni_lavoro = 0;
    let giorni_ferie = 0;
    let giorni_malattia = 0;

    for (let i in data) {
      if (data[i].mode === "ufficio") giorni_lavoro++;
      if (data[i].mode === "smart") giorni_lavoro++;
      if (data[i].mode === "trasferta") giorni_lavoro++;
      if (data[i].mode === "chiusura") giorni_ferie++;
      if (data[i].mode === "ferie") giorni_ferie++;
      if (data[i].mode === "malattia") giorni_malattia++;
    }

    let giorni_tot = giorni_lavoro + giorni_ferie + giorni_malattia;

    let percentuale_lavoro = parseInt((100 * giorni_lavoro) / giorni_tot);
    let percentuale_ferie = parseInt((100 * giorni_ferie) / giorni_tot);
    let percentuale_malattia = parseInt((100 * giorni_malattia) / giorni_tot);
    setLavoro(percentuale_lavoro);
    setFerie(percentuale_ferie);
    setMalattia(percentuale_malattia);

    let workday = data.length;
    let percentuale_workday = parseInt((100 * workday) / 255);
    setTotWork(percentuale_workday);
    // setWorkDay(workday);

    // console.log(workday);
    // console.log(giorni_lavoro, giorni_ferie, giorni_malattia);
    // console.log(percentuale_lavoro, percentuale_ferie, percentuale_malattia);
  };

  return (
    <>
      <Row gutter={[48, 0]}>
        <Col span={24} md={24} className="mb-24">
          <Card
            bordered={false}
            title={<h6 className="font-semibold m-0">Grafico Presenze</h6>}
            className="header-solid h-full card-profile-information"
            bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
          >
            <Descriptions>
              <Descriptions.Item span={3}>
                <Progress
                  type="circle"
                  // 255 giorni di lavoro totali in un anno (da sistemare)
                  percent={totWork}
                  style={{ margin: "20px auto" }}
                />
              </Descriptions.Item>
              <Descriptions.Item label="Lavoro" span={3}>
                <Progress percent={lavoro} status="active" />
              </Descriptions.Item>
              <Descriptions.Item label="Ferie" span={3}>
                <Progress percent={ferie} status="active" />
              </Descriptions.Item>
              <Descriptions.Item label="Malattia" span={3}>
                <Progress percent={malattia} status="active" />
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </Col>

        <Col span={24} md={8} className="mb-24">
          <Card
            bordered={false}
            title={<h6 className="font-semibold m-0">Anagrafica</h6>}
            className="header-solid h-full card-profile-information"
            bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
          >
            <hr className="my-25" />
            <Descriptions>
              <Descriptions.Item span={3}>
                {user?.username || null} {user?.surname || null}
              </Descriptions.Item>
              <Descriptions.Item span={3}>
                {user?.birthplace + " (" + user?.birthplaceProvincia + ")" ||
                  null}
              </Descriptions.Item>
              <Descriptions.Item span={3}>
                {user?.birth || null}
              </Descriptions.Item>
              <Descriptions.Item span={3}>{user?.cf || null}</Descriptions.Item>
            </Descriptions>
          </Card>
        </Col>

        <Col span={24} md={8} className="mb-24">
          <Card
            bordered={false}
            title={<h6 className="font-semibold m-0">Contatti</h6>}
            className="header-solid h-full card-profile-information"
            bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
          >
            <hr className="my-25" />
            <Descriptions>
              <Descriptions.Item label="email" span={3}>
                {user?.email || "non presente"}
              </Descriptions.Item>
              <Descriptions.Item label="cellulare" span={3}>
                {user?.cellulare || "non presente"}
              </Descriptions.Item>
              <Descriptions.Item label="indirizzo" span={3}>
                {user?.indirizzo || "non presente"}
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </Col>

        <Col span={24} md={8} className="mb-24">
          <Card
            bordered={false}
            title={<h6 className="font-semibold m-0">Ruolo</h6>}
            className="header-solid h-full card-profile-information"
            bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
          >
            <hr className="my-25" />
            <Descriptions>
              <Descriptions.Item label="utente" span={3}>
                {user?.role || "non presente"}
              </Descriptions.Item>
              <Descriptions.Item label="ruolo F.T" span={3}>
                {user?.ft_role || "non presente"}
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </Col>
      </Row>
    </>
  );
}
