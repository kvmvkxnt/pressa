import { Route } from "../types";

export const sendMessage: Route = (_: any, res: any, next: any) => {
  try {
    // extracting message from 'res.locals'
    const { message } = res.locals;
    if (message) {
      res.status(200).json({
        status: 200,
        message: message
      });
    } else {
      res.status(404).json({
        status: 404,
        message: 'There is no message for you, my friend'
      });
    }
  } catch (e: any) {
    next(e);
  }
}
