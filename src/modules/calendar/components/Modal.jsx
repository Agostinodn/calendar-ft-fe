import React from "react";
import "antd/dist/antd.min.css";

import { Modal, Form, Radio } from "antd";
import TextArea from "antd/lib/input/TextArea";

export default function Modale({
  handleOk,
  handleCancel,
  isModalVisible,
  setForm,
  form,
}) {
  return (
    <>
      {/* INIZIO MODALE */}
      <Modal
        title="Scegli la Modalità di lavoro"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {/* INIZIO FORM */}
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
        >
          <Form.Item
            label="Modalità"
            onChange={(e) => setForm({ ...form, mode: e.target.value })}
            // onChange={(e) => setForm({ ...form, modalita: e.target.value })}
          >
            <Radio.Group>
              <Radio value="ufficio"> Ufficio </Radio>
              <Radio value="ferie"> Ferie </Radio>
              <Radio value="smart"> Smart </Radio>
              <Radio value="trasferta"> Trasferta </Radio>
              <Radio value="chiusura"> Chiusura Aziendale </Radio>
              <Radio value="malattia"> Malattia </Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="Note">
            <TextArea
              name="note"
              onChange={(e) => setForm({ ...form, note: e.target.value })}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
