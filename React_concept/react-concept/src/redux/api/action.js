
export const GETAPIDATA = "GETAPIDATA"
export const ADDAPIDATA = "ADDAPIDATA"


export const getapidata = () => {
    return {
        type: GETAPIDATA,

    };
};

export const addapidata = (data) => {
    return {
        type: ADDAPIDATA,
        payload: data
    };
};
