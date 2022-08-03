import { JwtPayload } from "jsonwebtoken";
import jwt from "../../utils/jwt.js";
import model from "./model.js";

export default {
  Query: {
    events: async () => {
      return await model.GET_ALL_EVENTS();
    },
    event: async (_: any, args: { eventId: number }) => {
      return await model.GET_EVENT_BY_ID(args.eventId);
    }
  },

  Event: {
    eventId: (parent: any) => parent.event_id,
    eventDate: (parent: any) => parent.event_date,
    eventTime: (parent: any) => parent.event_time,
    linkAddress: (parent: any) => parent.link_address,
    user: (parent: any) => {
      return {
        id: parent.id,
        username: parent.username,
        avatar: parent.avatar
      }
    },
    organizatorEntityType: (parent: any) => parent.organizator_entity_type,
    organizatorLegalName: (parent: any) => parent.organizator_legal_name,
    organizatorProfession: (parent: any) => parent.organizator_profession,
    organizatorPhone: (parent: any) => parent.organizator_phone,
    organizatorAdditionalPhone: (parent: any) => parent.organizator_additional_phone,
    postTitle: (parent: any) => parent.post_title,
    postDescription: (parent: any) => parent.post_description,
    postImages: (parent: any) => parent.post_images,
    postText: (parent: any) => parent.post_text
  },

  Mutation: {
    addEvent: async (_: any, args: any, context: any) => {
      let token = '';
      for (let value in context) {
        token += context[value];
      }
      const obj: string | JwtPayload | any = jwt.verify(token);
      args.userId = obj.userId;
      if (!token) {
        return {
          status: 403,
          message: 'Forbidden! Token required!'
        }
      } else {
        const newEvent = await model.ADD_EVENTS(args);

        if (newEvent?.event_id) {
          return {
            status: 201,
            message: 'Succesfully added new event',
            data: newEvent
          }
        } else {
          return {
            status: 401,
            message: newEvent
          }
        }
      }
    },

    deleteEvent: async (_: any, args: any, context: any) => {
      let token = '';
      for (let value in context) {
        token += context[value];
      }
      const obj: string | JwtPayload | any = jwt.verify(token);
      args.userId = obj.userId;
      if (!token) {
        return {
          status: 403,
          message: 'Forbidden! Token required!'
        }
      } else {
        const deletedEvent = await model.DELETE_EVENT(args.eventId);

        if (deletedEvent?.event_id) {
          return {
            status: 201,
            message: 'Succesfully deleted',
            data: deletedEvent
          }
        } else {
          return {
            status: 401,
            message: deletedEvent
          }
        }
      }
    }
  }
};
