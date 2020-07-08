import Axios from '../../axios';
import {SEARCH_ALL_REVIEWS} from '../actionTypes';

export const searchAllReviews = (reviewResults) => {
    return {
        type: SEARCH_ALL_REVIEWS,
        payload: reviewResults
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
