import { fetch, fetchAll } from "../../utils/pg.js";
import sql from './queries.js';

const GET_USERS = () => {
  return fetchAll(sql.GET_USERS);
};

const GET_USER_BY_ID = (id: number | string) => {
  return fetch(sql.GET_USER_BY_ID, id);
};

const GET_USER_BY_UP = (params: { username: string, password: string }) => {
  return fetch(sql.GET_USER_BY_UP, params.username, params.password);
};

const ADD_USER = (params: { username: string, password: string, avatar: string | null | undefined }) => {
  return fetch(sql.ADD_USER, params.username, params.password, params.avatar);
};

const DELETE_USER = (id: number | string) => {
  return fetch(sql.DELETE_USER, id);
};

export default {
  GET_USERS,
  GET_USER_BY_ID,
  GET_USER_BY_UP,
  ADD_USER,
  DELETE_USER
};
