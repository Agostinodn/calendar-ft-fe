import axios from "axios";
import { headerAuth } from "./authHeader";

const url = process.env.REACT_APP_USER_URL;
const url_register = process.env.REACT_APP_REGISTER_URL;
const url_login = process.env.REACT_APP_LOGIN_URL;

const getAll = () => {
  const request = axios.get(url, { headers: headerAuth() });
  return request
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(error.message);
    });
};

const create = (newObject) => {
  const request = axios.post(url_register, newObject, {
    headers: headerAuth(),
  });
  return request
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(error.response.data.message);
    });
};

const login = (newObject) => {
  const request = axios.post(url_login, newObject);
  return request
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(error.response.data.message);
    });
};

export const auth = {
  create,
  login,
  getAll,
};
