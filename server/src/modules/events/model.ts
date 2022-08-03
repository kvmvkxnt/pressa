import { fetch, fetchAll } from '../../utils/pg.js';
import sql from './queries.js';

const GET_ALL_EVENTS = async () => {
  return await fetchAll(sql.GET_ALL_EVENTS);
};

const GET_EVENT_BY_ID = async (id: number | string) => {
  return await fetch(sql.GET_EVENT_BY_ID, id);
};

const ADD_EVENTS = async (args: any) => {
  return await fetch(sql.ADD_EVENT, args.eventDate, args.eventTime, args.subCategoryId, args.type, args.linkAddress, args.userId, args.organizatorEntityType, args.organizatorLegalName, args.organizatorProfession, args.organizatorPhone, args.organizatorAdditionalPhone, args.postTitle, args.postDescription, args.postImages, args.postText);
};

const DELETE_EVENT = async (id: number | string) => {
  return await fetch(sql.DELETE_EVENT, id);
}

export default {
  GET_ALL_EVENTS,
  GET_EVENT_BY_ID,
  ADD_EVENTS,
  DELETE_EVENT
}
