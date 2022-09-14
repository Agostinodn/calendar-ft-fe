import React from "react";
import { Link } from "react-router-dom";
import { Descriptions } from "antd";

export default function User({ singleUser }) {
  console.log(singleUser);
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
      {/* <div>
        <h1>{singleUser.surname ? singleUser.surname : null}</h1>
        <p>email: {singleUser.email ? singleUser.email : "non presente"}</p>
        <p>CF: {singleUser.cf ? singleUser.cf : "non presente"}</p>
        <p>
          cell: {singleUser.cellulare ? singleUser.cellulare : "non presente"}
        </p>
        <p>
          indirizzo:{" "}
          {singleUser.indirizzo ? singleUser.indirizzo : "non presente"}
        </p>
        <p>
          luogo di nascita:{" "}
          {singleUser.birthplace &&
            singleUser.birthplaceProvincia &&
            `${singleUser.birthplace} (${singleUser.birthplaceProvincia})`}
        </p>

        <p>role: {singleUser.role ? singleUser.role : "non presente"}</p>
        <p>uid: {singleUser.uid ? singleUser.uid : "non presente"}</p>
      </div> */}
    </>
  );
}
