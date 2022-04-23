import React, { useState } from "react";
import SharedInput from "./common/SharedInput";

export const FormContext = React.createContext({});

const initState = {
  userContact: {
    name: "",
    surname: "",
  },
};
export const reducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        userContact: {
          ...state.userContact,
          name: action.payload,
        },
      };
    case "SET_SURNAME":
      return {
        ...state,
        userContact: {
          ...state.userContact,
          surname: action.payload,
        },
      };
    default:
      return state;
  }
};

function Input() {
  const [state, dispatch] = React.useReducer(reducer, initState);
  const value = { state, dispatch };

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <FormContext.Provider value={value}>
        <SharedInput
          title={"name"}
          onSubmit={(e) => {
            e.preventDefault();
            setName(e.target.value);

            if (name !== "") setName("");
            return;
          }}
          value={name}
          onChange={handleChange}
        />
        <SharedInput
          title={"surname"}
          onSubmit={(e) => {
            e.preventDefault();
            setSurname(e.target.value);

            if (surname !== "") setSurname("");
            return;
          }}
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch({ type: "SET_NAME", payload: name });
            dispatch({ type: "SET_SURNAME", payload: surname });
          }}
        >
          Submit
        </button>
      </FormContext.Provider>
    </div>
  );
}

export default Input;
