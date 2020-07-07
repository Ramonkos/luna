import Axios from "../../axios";
import {LOGIN, LOGIN_ERROR, LOGOUT} from "../actionTypes";

export const login = (token, user) => {
    return {
        type: LOGIN,
        payload: {
            token,
            user
        }
    }
};

export const loginError = (error) => {
    return {
        type: LOGIN_ERROR,
        payload: error
    }
};

export const logout = () => {
    return {
        type: LOGOUT
    }
};

export const loginAction = ({email, password}) => async (dispatch) => {
    console.log('loginAction stage 1')
    try {
        const response = await Axios.post('token/', {email, password});
        const token = response.data.token;
        const user = response.data.user;
        if (token) {
            dispatch(login(token, user));
            localStorage.setItem('token', token);
        }
        return response
    } catch (error) {
        console.log('Error during Login >', error);
        dispatch(loginError('The credentials are not valid'));
        return error
    }
};