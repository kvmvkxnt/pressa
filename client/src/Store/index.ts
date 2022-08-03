import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { reducer as tokenReducer } from "./token/reducer.js";
import { reducer as userReducer } from './user/reducer.js';

const rootReducers = combineReducers({
  token: tokenReducer,
  user: userReducer
});

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));

export { store };
