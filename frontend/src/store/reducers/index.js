import {combineReducers} from "redux";
import {loginReducer} from "./reducers/loginReducer";
import {signUpReducer} from "./reducers/signUpReducer";
import {errorReducer} from "./reducers/errorReducer";
import {restaurantReducer} from "./reducers/restaurantReducer";
import { reviewReducer } from "./reducers/reviewReducer";
import {userInfoReducer} from "./reducers/userInfoReducer"

export const rootReducer = combineReducers({
   loginReducer,
   signUpReducer,
   errorReducer,
   restaurantReducer,
   reviewReducer,
   userInfoReducer,
});
