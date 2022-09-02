import React, { useState } from "react";
import { DatePicker, Form, Input, Divider, List, Skeleton } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import { Content } from "../../components";
import { auth } from "../../../../shared/services/auth";
//
export default function Users({
  serchBar,
  setSerchBar,
  filteredPersons,
  data,
  loadData,
  setSingleUser,
  navigation,
}) {
  const [userForm, setUserForm] = useState({});

  const sendForm = (e) => {
    e.preventDefault();
    console.log(e);

    // if (
    //   !userForm.username ||
    //   !userForm.email ||
    //   !userForm.password ||
    //   !userForm.repeat_password
    // ) {
    //   console.log("alcuni campi risultano incompleti");
    // } else if (userForm.password !== userForm.repeat_password) {
    //   console.log("le password non combaciano");
    // } else {
    //   auth
    //     .create(userForm)
    //     .then((res) => setUserForm({}))
    //     .catch((e) => setUserForm({}));
    // }
  };

  return (
    <>
      <form onSubmit={(e) => sendForm(e)}>
        <h3>Crea Nuovo Utente</h3>

        <Input
          type={"text"}
          placeholder="username"
          onChange={(e) =>
            setUserForm({ ...userForm, username: e.target.value })
          }
        />
        <Input
          type={"text"}
          placeholder="cognome"
          onChange={(e) =>
            setUserForm({ ...userForm, surname: e.target.value })
          }
        />
        <Input
          type={"text"}
          placeholder="codice fiscale"
          onChange={(e) => setUserForm({ ...userForm, cf: e.target.value })}
        />
        <Input
          type={"email"}
          placeholder="email"
          onChange={(e) => setUserForm({ ...userForm, email: e.target.value })}
        />
        <Input
          type={"number"}
          placeholder="cellulare"
          onChange={(e) =>
            setUserForm({ ...userForm, cellulare: e.target.value })
          }
        />
        <Input
          type={"text"}
          placeholder="indirizzo"
          onChange={(e) =>
            setUserForm({ ...userForm, indirizzo: e.target.value })
          }
        />
        <Input placeholder="ruolo" />
        <Input
          type={"password"}
          placeholder="password"
          onChange={(e) =>
            setUserForm({ ...userForm, password: e.target.value })
          }
        />
        <Input
          type={"password"}
          placeholder="repassword"
          onChange={(e) =>
            setUserForm({ ...userForm, repeat_password: e.target.value })
          }
        />
        <Form.Item
          label="Anno di Nascita"
          onSelect={(e) =>
            setUserForm({
              ...userForm,
              birth: e.target.value,
            })
          }
        >
          <DatePicker />
        </Form.Item>

        <button>Crea</button>
      </form>

      <h3>Cerca Utente</h3>
      <Content.Serch
        type="text"
        placeholder="Cerca..."
        onChange={(e) => {
          setSerchBar(e.target.value);
        }}
      ></Content.Serch>
      <Content.SerchList>
        <InfiniteScroll
          dataLength={data.length}
          next={loadData}
          hasMore={data.length < 5}
          loader={
            <Skeleton
              avatar
              paragraph={{
                rows: 1,
              }}
              active
            />
          }
          endMessage={<Divider plain>It is all</Divider>}
          scrollableTarget="scrollableDiv"
        >
          <List
            dataSource={filteredPersons}
            renderItem={(item) => (
              <List.Item key={item.uid}>
                <List.Item.Meta
                  title={item.username}
                  description={item.email}
                />
                <Content.UserButton
                  onClick={() => {
                    setSingleUser(item);
                    console.log("navigate to ", item.uid);
                    navigation(`/admin/user`);
                  }}
                >
                  {"Modifica "}
                </Content.UserButton>
              </List.Item>
            )}
          />
        </InfiniteScroll>
      </Content.SerchList>
    </>
  );
}
