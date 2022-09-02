import React from "react";
import { Link } from "react-router-dom";
export default function User({ singleUser }) {
  console.log(singleUser);

  return (
    <>
      <div>
        <Link to="/admin">Go to Admin Dash</Link>
        <h1>
          {singleUser.username ? singleUser.username : "non presente"}{" "}
          {singleUser.surname ? singleUser.surname : null}
        </h1>
        <p>email: {singleUser.email ? singleUser.email : "non presente"}</p>
        <p>CF: {singleUser.cf ? singleUser.cf : "non presente"}</p>
        <p>
          cell: {singleUser.cellulare ? singleUser.cellulare : "non presente"}
        </p>
        <p>
          indirizzo:{" "}
          {singleUser.indirizzo ? singleUser.indirizzo : "non presente"}
        </p>
        <p>role: {singleUser.role ? singleUser.role : "non presente"}</p>
        <p>uid: {singleUser.uid ? singleUser.uid : "non presente"}</p>
      </div>
    </>
  );
}
