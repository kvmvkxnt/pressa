import { JwtPayload } from "jsonwebtoken";
import jwt from "../../utils/jwt.js";
import model from "./model.js";

export default {
  Query: {
    users: async (_: any, args: { userId: string }) => {
      if (args.userId) {
        let user = await model.GET_USER_BY_ID(args.userId);
        return [user];
      } else {
        return await model.GET_USERS();
      }
    }
  },

  User: {
    userId: (parent: any) => parent.id
  },

  Mutation: {
    addUser: async (_: any, args: { username: string, password: string, avatar: string | null | undefined }) => {
      let user = await model.ADD_USER(args);
      //console.log(user.detail, user.message);
      if (user?.id) {
        return {
          status: 201,
          message: "New user added",
          token: jwt.sign({ userId: user.id }),
          data: user
        }
      } else {
        return {
          status: 401,
          message: `${user?.message}. ${user?.detail ? 'ℹ️ : ' + user.detail : null}`
        }
      }
    },

    deleteUser: async (_: any, args: { userId: string }, context: any) => {
      let token = '';
      for (let value in context) {
        token += context[value];
      }
      const deletable: any = jwt.verify(token);
      const deletableUid: string = deletable.userId;
      if (deletableUid === args.userId) {
        let user = await model.DELETE_USER(args.userId);

        if (user?.id) {
          return {
            status: 201,
            message: 'Succesfully deleted',
            data: user
          }
        } else if (user.message) {
          return {
            status: 400,
            message: user.message
          }
        } else {
          return {
            status: 500,
            message: 'Internal Server Error'
          }
        }
      } else {
        return {
          status: 400,
          message: 'How the hell are you trying to delete another user?'
        }
      }
    },

    login: async (_: any, args: { username: string, password: string }) => {
      let user = await model.GET_USER_BY_UP(args);
      if (user?.id) {
        let token = jwt.sign({ userId: user.id });
        return {
          status: 200,
          message: 'Success!',
          token,
          data: user
        }
      } else {
        return {
          status: 401,
          message: 'Wrong username or password'
        }
      }
    }
  }
};
