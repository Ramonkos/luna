import {GET_TOP_4_RESTAURANTS, CREATE_RESTAURANT, GET_ALL_RESTAURANTS} from "../../actionTypes";


const initial_state = {
    top4Restaurants: [],
    targetRestaurant: null,
    allRestaurants: [],
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
                allRestaurants: action.payload
            };
        default:
            return state
    }
};

