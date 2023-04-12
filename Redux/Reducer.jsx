import { combineReducers } from "redux";
import RecipeReducer from "./RecipeReducer";

const Reducer = combineReducers({
    userDetail: RecipeReducer
})
export default Reducer;