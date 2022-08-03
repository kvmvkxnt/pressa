import { ADD, REMOVE } from "./types.js";

export const addTokenAction = (payload: any) => ({ type: ADD, payload });
export const removeTokenAction = () => ({ type: REMOVE });
