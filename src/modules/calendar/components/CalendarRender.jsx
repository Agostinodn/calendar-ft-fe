import React from "react";
import { Calendar as CalendarAntd, Tag } from "antd";

export default function CalendarRender({
  handleDate,
  dbData,
  setIsModalVisible,
}) {
  // DISABILITARE LE DATE DEL FINE SETTIMANA
  const disableData = (value) => {
    let date = value.day();
    // console.log(value.day());
    return date === 6 || date === 0;
  };

  // GESTIONE LISTA CELLA SINGOLA
  const getListData = (value, dbData) => {
    let listData;
    for (let i in dbData) {
      if (value.year() === dbData[i].year) {
        if (value.month() === dbData[i].month) {
          let color = "green";
          if (dbData[i].mode === "ferie") color = "yellow";
          if (dbData[i].mode === "smart") color = "blue";
          if (dbData[i].mode === "malattia") color = "red";
          if (dbData[i].mode === "chiusura") color = "red";

          switch (value.date()) {
            case dbData[i].day:
              listData = [
                {
                  color: color,
                  content: `${dbData[i].mode}`,
                  note: dbData[i].note,
                },
              ];
              break;

            default:
          }
        }
      }
    }
    return listData || [];
  };
  const dateCellRender = (value) => {
    const listData = getListData(value, dbData);
    return (
      <ul
        className="events"
        onClick={() => setIsModalVisible(true)}
        style={{
          width: "100%",
          height: "72px",
        }}
      >
        {listData.map((item, i) => (
          <li key={i}>
            <Tag
              color={item.color}
              style={{
                width: "100%",
                height: "72px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {item.content}
            </Tag>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <CalendarAntd
      disabledDate={(value) => disableData(value)}
      onSelect={(value) => handleDate(value)}
      dateCellRender={(value) => dateCellRender(value)}
    />
  );
}
