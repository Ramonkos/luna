import Axios from '../../axios';
import {SIGNUP, SIGNUP_ERROR, VERIFICATION_ERROR, RESET_ERRORS} from "../actionTypes";
import {setError} from "./errorActions";

export const signUpSuccess = email => {
    return {
        type: SIGNUP,
        payload: email
    }
};

export const signUpError = error => {
    return {
        type: SIGNUP_ERROR,
        payload: error
    }
};

export const verificationError = errors => {
    return {
        type: VERIFICATION_ERROR,
        payload: errors
    }
};

export const resetError = () => {
    return {
        type: RESET_ERRORS,
    }
}

export const signUpAction = email => async (dispatch) => {
    try {
        const response = await Axios.post('auth/registration/', {email: email});
        await dispatch(signUpSuccess(email));
        return response
    } catch (error) {
        console.log('Error with SignUp, error.response.data>', error.response.data);
        await dispatch(signUpError(error.response.data.email[0]));
        return error
    }
};

export const registrationVerificationAction = data => async (dispatch) => {
    try {
        const response = await Axios.post('auth/registration/validate/', {...data});
        return response
    } catch (e) {
        //Network Error
        if (!e.response) {
            await dispatch(setError(e.message));
            return e;
        }
        ;
        let errors = {}
        // Cleaning up error messages from the backend, getting rid of nested arrays
        for (let i of Object.keys(e.response.data)) {
            errors[i] = e.response.data[i].join(' ');
        }
        ;
        console.log(errors)
        if (errors.detail === "Your Validation Code is incorrect") {
            await dispatch(signUpError(errors.detail))
        } else {
            await dispatch(verificationError(errors));
        }
        return e.response;
    };
};
