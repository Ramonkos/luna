import {
    GET_TOP_4_RESTAURANTS,
    CREATE_RESTAURANT,
    GET_ALL_RESTAURANTS,
    SEARCH_ALL_RESTAURANTS,
    SEARCH_RESTAURANTS_BY_CATEGORY,
    GET_SPECIFIC_RESTAURANT,
    GET_FROM_USER_RESTAURANT,
    GET_USER_COMMENTS,
} from "../../actionTypes";


const initial_state = {
    top4Restaurants: [],
    targetRestaurant: null,
    restaurants: [],
    userRestaurants: [],
    userComments: [],
};

export const restaurantReducer = (state = initial_state, action) => {
    switch (action.type) {
        case GET_TOP_4_RESTAURANTS:
            return {
                ...state,
                top4Restaurants: action.payload
            };
        case CREATE_RESTAURANT:
            return {
                ...state,
                targetRestaurant: action.payload
            };
        case GET_ALL_RESTAURANTS:
            return {
                ...state,
                restaurants: action.payload
            };
        case SEARCH_ALL_RESTAURANTS:
            return {
                ...state,
                restaurants: action.payload
            };
        case SEARCH_RESTAURANTS_BY_CATEGORY:
            return {
                ...state,
                restaurants: action.payload
            };
        case GET_SPECIFIC_RESTAURANT:
            return {
                ...state,
                targetRestaurant: action.payload
            }
        case GET_FROM_USER_RESTAURANT:
            return {
                ...state,
                userRestaurants: action.payload
            }
        case GET_USER_COMMENTS:
            return {
                ...state,
                userComments: action.payload
            }
        default:
            return state
    }
};
