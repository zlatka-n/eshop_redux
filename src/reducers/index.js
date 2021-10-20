import { combineReducers } from "redux";
import { toBuy } from "./addItemReducer";
import { reducer as formReducer } from "redux-form";

const appReducer = combineReducers({
  getBook: toBuy,
  form: formReducer,
});

export const rootReducer = (state, action) => {
  //resetting the state of a Redux store, when user submits delivery info
  if (action.type === "DELIVERY_INFO") {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};
