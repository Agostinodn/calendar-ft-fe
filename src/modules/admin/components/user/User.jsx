import React from "react";
import { Link } from "react-router-dom";
import { Descriptions } from "antd";

export default function User({ singleUser }) {
  return (
    <>
      <Link to="/admin">Go to Admin Dash</Link>

      <Descriptions title="User Info">
        <Descriptions.Item label="User">
          {singleUser.username} {singleUser.surname}
        </Descriptions.Item>
        <Descriptions.Item label="CF">{singleUser.cf}</Descriptions.Item>
        <Descriptions.Item label="Email">{singleUser.email}</Descriptions.Item>
        <Descriptions.Item label="Cell">
          {singleUser.cellulare}
        </Descriptions.Item>
        <Descriptions.Item label="Nascita">
          {singleUser.birth} {" - "}
          {singleUser.birthplace} ({singleUser.birthplaceProvincia})
        </Descriptions.Item>
        <Descriptions.Item label="Residenza">
          {singleUser.indirizzo}
        </Descriptions.Item>
      </Descriptions>
    </>
  );
}
