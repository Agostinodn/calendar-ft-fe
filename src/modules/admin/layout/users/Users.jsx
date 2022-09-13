import React, { useState } from "react";
import { List, Button, Modal } from "antd";
import { Content } from "../../components";
import RegisterAdminModule from "../registerModale/Register";

export default function Users({
  setSerchBar,
  filteredPersons,
  setSingleUser,
  navigation,
  loadData,
}) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <h3>Cerca Utente</h3>
      <Content.Serch
        type="text"
        placeholder="Cerca..."
        onChange={(e) => {
          setSerchBar(e.target.value);
        }}
      ></Content.Serch>

      <Content.SerchList>
        <List
          dataSource={filteredPersons}
          renderItem={(item) => (
            <List.Item key={item.uid}>
              <List.Item.Meta title={item.username} description={item.email} />
              <Content.UserButton
                onClick={() => {
                  setSingleUser(item);
                  // console.log("navigate to ", item.uid);
                  navigation(`/admin/user`);
                }}
              >
                {"Modifica "}
              </Content.UserButton>
            </List.Item>
          )}
        />
      </Content.SerchList>
      <Button
        type="default"
        onClick={showModal}
        style={{
          height: "45px",
          margin: "10px 0px 0px",
          borderColor: "rgb(255,68,56)",
          background: "rgb(255,68,56)",
          color: "#fff",
          boxShadow: "none",
        }}
      >
        Crea Nuovo Utente
      </Button>

      <Modal
        visible={isModalVisible}
        footer={null}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <RegisterAdminModule
          handleOk={handleOk}
          handleCancel={handleCancel}
          loadData={loadData}
        ></RegisterAdminModule>
      </Modal>
    </>
  );
}
