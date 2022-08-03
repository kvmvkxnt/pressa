// local type
import { Route } from "../types";
// global type
import { Message } from '../../../shared';

export const verifyAndCreateMessage: Route = (req, res, next) => {
  // extracting message from request body
  // type assertion, 'as Message' alternative
  const message = <Message>req.body;

  // if no message
  if (!message) {
    return res.status(400).json({
      status: 400,
      message: 'Message must be provided'
    });
  }

  // if message body includes word "know"
  if (message.body.includes('know')) {
    // returning error message
    return res.status(400).json({
      status: 400,
      message: 'Nobody kwons JavaScript'
    });
  }

  // creating and writing message into 'res.locals'
  res.locals.message = {
    title: 'Message from server',
    body: 'Hello from server!'
  };
  // sharing control with service
  next();
}
