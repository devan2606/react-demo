import Axios from "axios";

export const fetchdata = () => async (dispatch, getState) => {
    dispatch({ type: "FETCH_DATA_REQUEST" });

    try {
        const response = await Axios.get(
            "http://jsonplaceholder.typicode.com/posts"
        );


        dispatch({ type: "FETCH_DATA_SUCCESS", payload: response.data });
    } catch (error) {





        dispatch({ type: "FETCH_DATA_FAILURE", error });
    }
};





// export const fetchdata = () =>
//     async (dispatch) => {
//         const response = await Axios.get('http://jsonplaceholder.typicode.com/posts');
//         // console.log(response.data);
//         dispatch({
//             type: "FETCH_DATA",
//             payload: response.data
//         });

//     }
