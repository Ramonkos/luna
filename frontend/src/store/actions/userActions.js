import Axios from '../../axios';
import {SEARCH_ALL_USERS} from '../actionTypes';

export const searchAllUsers = (userResults) => {
    console.log('Dispatch Trigger')
    return {
        type: SEARCH_ALL_USERS,
        payload: userResults
    }
};

export const searchAllUsersAction = (search_string) => async (dispatch) => {
    try {
        const response = await Axios.get(`search/${search_string}`);
        dispatch(searchAllUsers(response.data));
        return response
    } catch (error) {
        console.log('Error in searching Users>', error);
        return error
    }
};