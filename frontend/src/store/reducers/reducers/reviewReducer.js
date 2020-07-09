import {SEARCH_ALL_REVIEWS} from '../../actionTypes'

const initial_state = {
    targetReview: null,
    searchReviewResults: [],
};

export const reviewReducer = (state = initial_state, action) => {
    switch (action.type) {
        case SEARCH_ALL_REVIEWS :
            return {
                ...state,
                searchReviewResults: action.payload,
            };
        default:
            return state
    }
};