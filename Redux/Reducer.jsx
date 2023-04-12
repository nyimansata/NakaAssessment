import { combineReducers } from "redux";
import RecipeReducer from "./RecipeReducer";

const Reducer = combineReducers({
    favoriteItem: RecipeReducer
})
export default Reducer;