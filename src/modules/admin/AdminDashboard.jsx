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

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const loadData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    auth
      .getAll()
      .then((res) => {
        console.log(res.response);
        setData([...res.response]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  const filteredPersons = data.filter((person) =>
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
                  loadData={loadData}
                  setSingleUser={setSingleUser}
                  navigation={navigation}
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
