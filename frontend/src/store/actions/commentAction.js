import Axios from '../../axios';
import {GET_USER_COMMENTS} from "../actionTypes";

export const getUserComments = (userComments) => {
    return {
        type: GET_USER_COMMENTS,
        payload: userComments
    }
}

export const toggleLikeCommentAction = (reviewId) => async (dispatch) => {
    try {
        const response = await Axios.post(`reviews/like/${reviewId}/`);
        return response
    } catch (error) {
        console.log('Error liking a comment>', error)
        return error
    }
};

export const createCommentOnReviewAction = (reviewId, data) => async (dispatch) => {
    try {
        const response = await Axios.post(`comment/new/${reviewId}/`, data)
        return response
    } catch (error) {
        console.log('Error creating a comment>', error);
        return error
    }
};

export const getUserCommentsAction = (user_id, data) => async (dispatch) => {
    try {
        const response = await Axios.get(`comment/user/${user_id}/`, data)
        dispatch(getUserComments(response.data));
        return response
    } catch (error) {
        console.log('Error fetching comments>', error);
        return error
    }
};

