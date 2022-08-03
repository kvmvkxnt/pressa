import { fetch, fetchAll } from '../../utils/pg.js';
import sql from './queries.js';

const GET_CATEGORIES = async () => {
  return await fetchAll(sql.GET_CATEGORIES);
};

const GET_SUBCATEGORIES = async () => {
  return await fetchAll(sql.GET_SUBCATEGORIES);
};

const GET_ALL = async () => {
  return await fetchAll(sql.GET_ALL);
};

const ADD_CATEGORY = async (title: string) => {
  return await fetch(sql.ADD_CATEGORY, title);
}

export default {
  GET_CATEGORIES,
  GET_SUBCATEGORIES,
  GET_ALL,
  ADD_CATEGORY,
}
