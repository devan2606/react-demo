import { GET_LOGIN_DATA, ADD_LOGIN_DATA } from "../../redux/action/LoginAction";

const initialState = [];

const appState = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGIN_DATA:
      return;
    case ADD_LOGIN_DATA:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default appState;
