import Axios from '../../axios';
import {GET_TOP_4_RESTAURANTS, CREATE_RESTAURANT} from '../actionTypes';

export const top4Restaurants = (restaurantInfo) => {
    return {
        type: GET_TOP_4_RESTAURANTS,
        payload: restaurantInfo
    }
};

export const createRestaurant = (restaurantInfo) => {
    return {
        type: CREATE_RESTAURANT,
        payload: restaurantInfo
    }
};

export const top4RestaurantsAction = () => async (dispatch) => {
    try {
        const response = await Axios.get('home/');
        dispatch(top4Restaurants(response.data));
        return response
    } catch (error) {
        console.log('Error fetching Top 4 Restaurants>', error);
        return error
    }
};

export const createRestaurantAction = (data) => async (dispatch) => {
    console.log('Action triggered')
    try {
        const response = await Axios.post('restaurants/new/', {...data});
        return response
    }  catch (error) {
        console.log('Error creating a new Restaurant>', error)
        return error
    }
};
