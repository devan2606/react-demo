import { GETAPIDATA, ADDAPIDATA } from './action'

const initialState = [];


export const apidatareducer = (state = initialState, action) => {

    switch (action.type) {

        case GETAPIDATA:
            return;

        case ADDAPIDATA:
            return [...state, ...action.payload];
        default:
            return state;
    }

}




