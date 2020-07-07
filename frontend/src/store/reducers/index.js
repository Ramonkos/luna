import {combineReducers} from "redux";
import {loginReducer} from "./reducers/loginReducer";
import {signUpReducer} from "./reducers/signUpReducer";
import {errorReducer} from "./reducers/errorReducer";

export const rootReducer = combineReducers({
   loginReducer,
   signUpReducer,
   errorReducer,
});
