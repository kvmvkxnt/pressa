import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { reducer as tokenReducer } from "./token/reducer.js";

const rootReducers = combineReducers({
  token: tokenReducer
});

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));

export { store };
