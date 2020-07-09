import Axios from '../../axios';

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
