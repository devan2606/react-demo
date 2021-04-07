import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import dataReducer from "./reducer";
import loadingReducer from './lodder/loadingReducer';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

const rootReducer = combineReducers({
  dataReducer: dataReducer,
  loading: loadingReducer,
  
});

const store = createStore(rootReducer, composedEnhancer);
export default store;
