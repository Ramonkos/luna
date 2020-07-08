import Axios from "../../axios";
import {LOGIN, LOGIN_ERROR, LOGOUT} from "../actionTypes";

export const login = (token) => {
    console.log('login action occuring')
    return {
        type: LOGIN,
        payload: {
            token
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
    try {
        const response = await Axios.post('token/', {email, password});
        const token = response.data.access;
        console.log('response>', response)
        if (token) {
            dispatch(login(token));
            localStorage.setItem('token', token);
        }
        return response
    } catch (error) {
        console.log('Error during Login >', error);
        dispatch(loginError('The credentials are not valid'));
        return error
    }
};