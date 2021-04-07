import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//Import reducers
import appState from "../reducers/LoginReducer";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

// add all reducers here
export const reducers = combineReducers({
  LoginState: appState,
});

const store = createStore(reducers, composedEnhancer);

export default store;
