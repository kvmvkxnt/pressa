import { JwtPayload } from "jsonwebtoken";
import jwt from "../../utils/jwt.js";
import model from "./model.js";

export default {
  Query: {
    comments: async (_: any, args: { eventId: number }) => model.GET_COMMENTS(args.eventId),
    subcomments: async (_: any, args: { commentId: number }) => model.GET_SUBCOMMENTS(args.commentId)
  },

  Comment: {
    commentId: (parent: any) => parent.comment_id,
    eventId: (parent: any) => parent.event_id,
    commentTitle: (parent: any) => parent.title,
    user: (parent: any) => {
      return {
        id: parent.id,
        username: parent.username,
        avatar: parent.avatar
      }
    },
    createdAt: (parent: any) => parent.created_at
  },

  SubComment: {
    subCommentId: (parent: any) => parent.subcomment_id,
    subCommentTitle: (parent: any) => parent.title,
    user: (parent: any) => {
      return {
        id: parent.id,
        username: parent.username,
        avatar: parent.avatar
      }
    },
    createdAt: (parent: any) => parent.created_at,
    commentId: (parent: any) => parent.comment_id
  },

  Mutation: {
    addComment: async (_: any, args: any, context: any) => {
      let token = '';
      for (let value in context) {
        token += context[value];
      }
      const obj: any = jwt.verify(token);
      args.userId = obj.userId;

      if (!token) {
        return {
          status: 403,
          message: 'Forbidden! Token required'
        }
      } else {
        const newComment = await model.ADD_COMMENT(args);

        if (newComment?.id) {
          return {
            status: 201,
            message: 'Comment added succesfully',
            data: newComment
          }
        } else {
          return {
            status: 401,
            message: newComment
          }
        }
      }
    },

    deleteComment: async (_: any, args: any, context: any) => {
      let token = '';
      for (let value in context) {
        token += context[value];
      }
      const obj: any = jwt.verify(token);
      args.userId = obj.userId;

      if (!token) {
        return {
          status: 403,
          message: 'Forbidden! Token required'
        }
      } else {
        const deletedComment = await model.DELETE_COMMENT(args);

        if (deletedComment?.id) {
          return {
            status: 201,
            message: 'succesfully deleted',
            data: deletedComment
          }
        } else {
          return {
            status: 401,
            message: deletedComment
          }
        }
      }
    },

    addSubComment: async (_: any, args: any, context: any) => {
      let token = '';
      for (let value in context) {
        token += context[value];
      }
      const obj: any = jwt.verify(token);
      args.userId = obj.userId;

      if (!token) {
        return {
          status: 403,
          message: 'Forbidden! Token required!'
        }
      } else {
        const newSubComment = await model.ADD_SUBCOMMENT(args);

        if (newSubComment?.id) {
          return {
            status: 201,
            message: 'succesfully added new subcommment',
            data: newSubComment
          }
        } else {
          return {
            status: 401,
            message: newSubComment
          }
        }
      }
    },

    deleteSubComment: async (_: any, args: any, context: any) => {
      let token = '';
      for (let value in context) {
        token += context[value];
      }
      const obj: any = jwt.verify(token);
      args.userId = obj.userId;

      if (!token) {
        return {
          status: 403,
          message: 'Forbidden! Token required'
        }
      } else {
        const deletedSubComment = await model.DELETE_SUBCOMMENT(args);

        if (deletedSubComment?.id) {
          return {
            status: 201,
            message: 'succesfully deleted',
            data: deletedSubComment
          }
        } else {
          return {
            status: 401,
            message: deletedSubComment
          }
        }
      }
    }
  }
}
