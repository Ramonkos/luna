import Axios from '../../axios';
import {SEARCH_ALL_REVIEWS, GET_USER_REVIEWS, CREATE_REVIEW} from '../actionTypes';

export const searchAllReviews = (reviewResults) => {
    return {
        type: SEARCH_ALL_REVIEWS,
        payload: reviewResults
    }
};

export const searchUserReviews = (reviewResults) => {
    return {
        type: GET_USER_REVIEWS,
        payload: reviewResults
    }
};

export const createReview = (reviewInfo) => {
    return {
        type: CREATE_REVIEW,
        payload: reviewInfo
    }
};

export const searchAllReviewsAction = (search_string) => async (dispatch) => {
    try {
        const response = await Axios.get(`search/${search_string}`);
        dispatch(searchAllReviews(response.data));
        return response
    } catch (error) {
        console.log('Error in searching Reviews>', error);
        return error
    }
};

export const searchUserReviewsAction = (search_string) => async (dispatch) => {
    try {
        const response = await Axios.get(`reviews/user/${search_string}/`);
        dispatch(searchUserReviews(response.data));
        return response
    } catch (error) {
        console.log('Error in searching Reviews>', error);
        return error
    }
};

export const createReviewAction = (data, id) => async (dispatch) => {
    try {
        const response = await Axios.post(`reviews/new/${id}/`, data);
        return response
    } catch (error) {
        console.log('Error creating a new Review>', error)
        return error
    }
};
