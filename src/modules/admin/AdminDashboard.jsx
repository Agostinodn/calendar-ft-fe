import React, { useState, useEffect, Suspense } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Content } from "./components";
import { User, Users } from "./layout";
import { auth } from "../../shared/services/auth";
import "antd/dist/antd.less";

export default function AdminDashboard() {
  const navigation = useNavigate();
  const [serchBar, setSerchBar] = useState("");
  const [singleUser, setSingleUser] = useState([]);

  const [data, setData] = useState([]);

  const loadData = () => {
    auth
      .getAll()
      .then((res) => {
        // console.log(res.response);
        setData([...res.response]);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  const filteredPersons = data.filter(
    (person) =>
      person.email.toLowerCase().includes(serchBar.toLowerCase()) ||
      person.username.toLowerCase().includes(serchBar.toLowerCase())
  );

  return (
    <>
      <Content.InfoContainer>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Users
                  serchBar={serchBar}
                  setSerchBar={setSerchBar}
                  filteredPersons={filteredPersons}
                  data={data}
                  setSingleUser={setSingleUser}
                  navigation={navigation}
                  loadData={loadData}
                />
              }
            />
            <Route
              exact
              path="/user"
              element={<User singleUser={singleUser} />}
            />
          </Routes>
        </Suspense>
      </Content.InfoContainer>
    </>
  );
}
