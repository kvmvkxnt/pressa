import { ADD, REMOVE } from "./types.js";
import { setCookie, getCookie } from "../../utils/cookies.js";

const initialValue = { token: getCookie('token') };

export const reducer = (state = initialValue, action: any) => {
  switch (action.type) {
    case REMOVE:
      setCookie('token', '');
      return { ...state, token: '' };
    case ADD:
      setCookie('token', action.payload);
      return { ...state, token: action.payload };
    default:
      return state;
  }
}
