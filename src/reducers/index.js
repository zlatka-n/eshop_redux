import { combineReducers } from "redux";
import { toBuy } from "./addItemReducer";
// import { availableItems } from "./availableItems";
import { reducer as formReducer } from "redux-form";

const appReducer = combineReducers({
  getBook: toBuy,
  // showItems: availableItems,
  form: formReducer,
});

export const rootReducer = (state, action) => {
  //resetting the state of a Redux store, when user submits delivery info
  if (action.type === "DELIVERY_INFO") {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

// export default combineReducers({
//   getBook: toBuy,
//   showItems: availableItems,
//   form: formReducer,
// });
