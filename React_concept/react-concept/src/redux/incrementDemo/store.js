import { counterReducer, secondReducer } from './index'
// import apidata from '../redux/feature/store/Reducer'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  counter: counterReducer,
  counter1: secondReducer,
  // showapidata: apidata


})

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);
export default store