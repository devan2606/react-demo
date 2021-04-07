import React, { Component } from "react";
import { MyContext } from "./App";

export default class Guest extends Component {
  render() {
    return (
      <div>
        <h4>Guest Component</h4>
        <MyContext.Consumer>
          {({ data, handleClick }) => (
            <div>
              <h2>
                Name:{data.name} Value:{data.value}
              </h2>

              <button onClick={handleClick}>Change Value</button>
            </div>
          )}
        </MyContext.Consumer>
      </div>
    );
  }
}
