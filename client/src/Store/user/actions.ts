import { ADD, REMOVE } from "./types.js";

export const addUserAction = (payload: any) => ({ type: ADD, payload });
export const removeUserAction = () => ({ type: REMOVE });
