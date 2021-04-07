import { createStore, combineReducers ,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

import { apidatareducer } from './reducer'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

const rootReducer = combineReducers({

    showapidata: apidatareducer,
   
    
})   

const store = createStore(
    rootReducer,
    composedEnhancer
);
export default store