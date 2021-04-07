import React, { createContext, useState } from "react";

export const TodosContext = createContext();

const TodosContextProvider = (props) => {
  const [state, setState] = useState(["first Array"]);

  return (
    <TodosContext.Provider value={{ state, setState }}>
      {props.children}
    </TodosContext.Provider>
  );
};




export default TodosContextProvider;
