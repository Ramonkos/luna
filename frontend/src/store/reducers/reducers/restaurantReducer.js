import {GET_TOP_4_RESTAURANTS} from "../../actionTypes";


const initial_state = {
    top4Restaurants: []
};

export const restaurantReducer = (state = initial_state, action) => {
    switch (action.type) {
        case GET_TOP_4_RESTAURANTS:
            console.log('restaurant Reducer>', action.payload)
            return {
                ...state,
                top4Restaurants: action.payload
            };
        default:
            return state
    }
};

