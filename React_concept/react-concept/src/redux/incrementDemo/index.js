const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
const MULT = "MULT"

export const GETAPIDATA="GETAPIDATA"


export const increment = (data) => {
    return {
        type: INCREMENT,
        payload: data
    }
}
export const decrement = (data) => {
    return {
        type: DECREMENT,
        data: data
    }
}


export const mult = (data) => {
    return {
        type: MULT,
        data: data
    }
}


export const getdata=(data)=>{
    return{
        type:GETAPIDATA,
        payload:data
    }
}

const initialState = {
    value: 3
}

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { value: state.value + 1 }
        case DECREMENT:

            return { value: state.value -1 }
        default:
            return state
    }

}

export const secondReducer = (state = initialState, action) => {
    switch (action.type) {
        case MULT:
            return { value: state.value * 2 }

        default:
            return state
    }

}