import React, { useState, useEffect } from "react";
import { FormContext } from "../Input";

function SharedInput({ title, onSubmit, value, onChange }) {
  const [contextValue, setContextValue] = useState({});
  const { state } = React.useContext(FormContext);

  useEffect(() => {
    setContextValue(state);
  }, [state]);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h2>{title}</h2>
        <input value={value} onChange={onChange}></input>
      </form>
    </div>
  );
}

export default SharedInput;
