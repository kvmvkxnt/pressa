import { ADD, REMOVE } from "./types.js";

const unparsed = window.localStorage.getItem('user');
let initialValue: any;

if (unparsed?.length && typeof unparsed == 'string') {
  initialValue = { user: JSON.parse(unparsed) }
} else {
  initialValue = { user: null }
}

export const reducer = (state = initialValue, action: any) => {
  switch (action.type) {
    case REMOVE:
      window.localStorage.removeItem('user');
      return { ...state, user: null };
    case ADD:
      window.localStorage.setItem('user', JSON.stringify(action.payload));
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
