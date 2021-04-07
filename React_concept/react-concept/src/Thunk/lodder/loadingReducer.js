const loadingReducer = (state = false, action) => {
    switch (action.type) {
      case 'FETCH_DATA_REQUEST':
        return true;
      case 'FETCH_DATA_SUCCESS':
        return false;
      default:
        return state;
    }
  }
  
  export default loadingReducer;