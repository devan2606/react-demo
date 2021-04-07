import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchdata } from "./Action";
import Loader from './lodder/lodder';
import './lodder/Lodder.css'

const ThunkView = ({ add, value, loading }) => {
    const [state, setstate] = useState([]);

    useEffect(() => {
        // add();
    }, []);
    useEffect(() => {
        setstate(value);
    }, [value]);

    console.log(state);
    console.log(value);

  
    const renderData = () => {
        return state.map((x) => {
            return (
                <div key={x.id}>
                    <label> title</label> : {x.title}
                </div>

            )
        })


    }

    return (
        <div className="personContainer">
            <button onClick={() => add()}>Show Data</button>

            {loading ? <Loader /> : renderData()}



        </div>
    );
};
const mapStateToProps = (state) => {
    console.log(state);
    return {
        value: state.dataReducer.items,
        loading: state.loading
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        add: () => dispatch(fetchdata()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ThunkView);
