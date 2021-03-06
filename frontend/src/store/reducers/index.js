import {combineReducers} from "redux";
import {loginReducer} from "./reducers/loginReducer";
import {signUpReducer} from "./reducers/signUpReducer";
import {errorReducer} from "./reducers/errorReducer";
import {restaurantReducer} from "./reducers/restaurantReducer";
import {userInfoReducer} from "./reducers/userInfoReducer"
import {reviewReducer} from "./reducers/reviewReducer";
import {userReducer} from "./reducers/userReducer";

export const rootReducer = combineReducers({
   loginReducer,
   signUpReducer,
   errorReducer,
   restaurantReducer,
   reviewReducer,
   userInfoReducer,
   userReducer,
});
