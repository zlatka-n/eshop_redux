import { combineReducers } from "redux";
import { toBuy } from "./addItemReducer";
import { availableItems } from "./availableItems";
export default combineReducers({
  getBook: toBuy,
  showItems: availableItems,
});
