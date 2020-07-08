import {combineReducers} from "redux";
import {loginReducer} from "./reducers/loginReducer";
import {signUpReducer} from "./reducers/signUpReducer";
import {errorReducer} from "./reducers/errorReducer";
import {restaurantReducer} from "./reducers/restaurantReducer";

export const rootReducer = combineReducers({
   loginReducer,
   signUpReducer,
   errorReducer,
   restaurantReducer,
});
