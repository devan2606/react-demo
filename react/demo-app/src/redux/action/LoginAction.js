export const GET_LOGIN_DATA = "GET_LOGIN_DATA";
export const ADD_LOGIN_DATA = "ADD_LOGIN_DATA";

export const getLoginData = () => {
  return {
    type: GET_LOGIN_DATA,
  };
};
export const addLoginData = (data) => {
  return {
    type: ADD_LOGIN_DATA,
    payload: data,
  };
};



