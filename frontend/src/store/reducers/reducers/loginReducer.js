import {LOGIN, LOGIN_ERROR, LOGOUT} from "../../actionTypes";

const initial_state = {
    token: null,
    user: null,
    error: null,
    authenticated: null
};

export const loginReducer = (state = initial_state, action) => {
    switch(action.type) {
        case LOGIN: {
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user,
                error: null,
                authenticated: true
            }
        }
        case LOGIN_ERROR: {
            return {
                ...state,
                token: null,
                error: action.payload,
                authenticated: false
            }
        }
        case LOGOUT: {
            localStorage.clear();
            return initial_state
        }
        default:
            return state
    }
};