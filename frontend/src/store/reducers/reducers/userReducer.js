import {SEARCH_ALL_USERS} from '../../actionTypes';

const initial_state = {
    targetUser: null,
    searchUserResults: [],
};

export const userReducer = (state = initial_state, action) => {
    switch (action.type) {
        case SEARCH_ALL_USERS :
            return {
                ...state,
                searchUserResults: action.payload,
            };
        default:
            return state
    }
};