import {
  GET_USER_INFORMATION,
  GET_USER_REVIEWS,
  GET_USER_COMMENTS,
  UPDATE_USER,
} from "../../actionTypes";

const initial_state = {
  targetUser: null
};

export const userInfoReducer = (state = initial_state, action) => {
  switch (action.type) {
      case GET_USER_INFORMATION:
          return {
              ...state,
              targetUser: action.payload
          };
      default:
          return state
  }
};