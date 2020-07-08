import Axios from '../../axios';
import {GET_TOP_4_RESTAURANTS} from '../actionTypes';

export const top4Restaurants = (restaurantInfo) => {
    return {
        type: GET_TOP_4_RESTAURANTS,
        payload: restaurantInfo
    }
};

export const top4RestaurantsAction = () => async (dispatch) => {
    try {
        const response = await Axios.get('/home/');
        console.log(response.data);
        dispatch(top4Restaurants(response.data));
        return response
    } catch (error) {
        console.log('Error fetching Top 4 Restaurants>', error);
        return error
    }
};
