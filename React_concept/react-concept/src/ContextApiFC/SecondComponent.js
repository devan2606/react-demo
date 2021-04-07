import { TodosContext } from "./FirstComponent";
import React, { useContext } from "react";

const SecondComponent = () => {
    const { state, setState } = useContext(TodosContext);
 
  
    const hanldleAddtodo = () => {
      setState((prev) => [...prev, "second array"]);
    };
  
    return (
      <div>
        <button onClick={hanldleAddtodo}>Add a todo</button>
        {state.map((el) => (
          <p >{el}</p>
        ))}
      </div>
    );
  };

  export default SecondComponent