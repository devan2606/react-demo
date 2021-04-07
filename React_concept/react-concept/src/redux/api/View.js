import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addapidata } from "./action";
import axios from "axios";

const View = ({ apidataadd, value }) => {
  const [data, setData] = useState(value);

  useEffect(() => {
    setData(value);

  }, [value]);


  const apidata = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        console.log(res);
        apidataadd(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <button onClick={() => apidata()}>SHOW</button>

      {data &&
        data.map((x) => {
          //   console.log(x);
          return (
            <div >
              <label> title</label> : {x.title}
            </div>
          );
        })}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    value: state.showapidata,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    apidataadd: (data) => dispatch(addapidata(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
