import axios from "axios";
import { headerAuth } from "./authHeader";

const url = process.env.REACT_APP_ANAGRAFICA_URL;

const getAll = () => {
  const request = axios.get(url, { headers: headerAuth() });
  return request.then((response) => response.data).catch(error => {throw new Error(error.message)} );
};

const getById = (id) => {
  const request = axios.get(`${url}/${id}`, { headers: headerAuth() });
  return request.then((response) => response.data).catch(error => {throw new Error(error.message)} );
};

const create = (newObject) => {
  const request = axios.post(url, newObject, { headers: headerAuth() });
  return request.then((response) => response.data).catch(error => {throw new Error(error.message)} );
};

const update = (id, newObject) => {
  const request = axios.put(`${url}/${id}`, newObject, { headers: headerAuth() });
  return request.then((response) => response.data).catch(error => {throw new Error(error.message)} );
};

const remove = (id) => {
  const request = axios.delete(`${url}/${id}`, { headers: headerAuth() });
  return request.then((response) => response.data).catch(error => {throw new Error(error.message)} );
};

export const anagrafica = {
  getAll,
  getById,
  create,
  update,
  remove,
};
