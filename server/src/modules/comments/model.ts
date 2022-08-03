import { fetch, fetchAll } from '../../utils/pg.js';
import sql from './queries.js';

const GET_COMMENTS = async (id: number | string) => {
  return await fetchAll(sql.GET_COMMENTS, id);
};

const GET_SUBCOMMENTS = async (id: number | string) => {
  return await fetchAll(sql.GET_SUBCOMMENTS, id);
};

const ADD_COMMENT = async (args: { eventId: number, title: string, userId: string }) => {
  return await fetch(sql.ADD_COMMENT, args.eventId, args.userId, args.title);
};

const DELETE_COMMENT = async (args: { commentId: number, userId: string }) => {
  return await fetch(sql.DELETE_COMMENT, args.commentId, args.userId);
};

const ADD_SUBCOMMENT = async (args: { commentId: number, userId: string, title: string }) => {
  return await fetch(sql.ADD_SUBCOMMENT, args.commentId, args.userId, args.title);
};

const DELETE_SUBCOMMENT = async (args: { subCommentId: number, userId: string }) => {
  return await fetch(sql.DELETE_SUBCOMMENT, args.subCommentId, args.userId);
}

export default {
  GET_SUBCOMMENTS,
  GET_COMMENTS,
  ADD_COMMENT,
  DELETE_COMMENT,
  ADD_SUBCOMMENT,
  DELETE_SUBCOMMENT
}
