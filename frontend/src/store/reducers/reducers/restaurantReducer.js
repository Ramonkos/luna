import {GET_TOP_4_RESTAURANTS, CREATE_RESTAURANT} from "../../actionTypes";


const initial_state = {
    top4Restaurants: [],
    targetRestaurant: null
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
            }
        default:
            return state
    }
};

