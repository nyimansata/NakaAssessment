import { ADD_RECIPE, DELETE_RECIPE } from "./Action";
import { data } from "../Components/Data";

const initialData = data;

const RecipeReducer = (state = initialData , action) => {
    switch (action.type) {
        case ADD_RECIPE:
            return{
                ...state,
                initialData:[...state.initialData, action.payload]
            }
            case DELETE_RECIPE:
                return{
                        ...state,
                        favorites: state.favorites.filter(f => f !== action.payload),
                }
        default:
            return state;
    }

}
export default RecipeReducer;