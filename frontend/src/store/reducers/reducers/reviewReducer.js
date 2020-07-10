import {SEARCH_ALL_REVIEWS, GET_USER_REVIEWS, CREATE_REVIEW} from "../../actionTypes";

const initial_state = {
  targetReview: null,
  searchReviewResults: [],
  userReviewResults: [],
};

export const reviewReducer = (state = initial_state, action) => {
  switch (action.type) {
    case SEARCH_ALL_REVIEWS:
      return {
        ...state,
        searchReviewResults: action.payload,
      };
    case GET_USER_REVIEWS:
      return {
        ...state,
        userReviewResults: action.payload,
      };

    // case CREATE_REVIEW:
    //   return {
    //       ...state,
    //       newReview: action.payload
    //         };

    default:
      return state;
  }
};
