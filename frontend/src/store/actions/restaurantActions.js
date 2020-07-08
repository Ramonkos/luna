import Axios from '../../axios';
import {GET_TOP_4_RESTAURANTS, CREATE_RESTAURANT, GET_ALL_RESTAURANTS} from '../actionTypes';

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

export const getAllRestaurants = (restaurantInfo) => {
    return {
        type: GET_ALL_RESTAURANTS,
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
    try {
        const response = await Axios.post('restaurants/new/', {...data});
        return response
    }  catch (error) {
        console.log('Error creating a new Restaurant>', error)
        return error
    }
};

export const allRestaurantsAction = () => async (dispatch) => {
    try {
        const response = await Axios.get('restaurants/all/');
        dispatch(getAllRestaurants(response.data));
        return response
    } catch (error) {
        console.log('Error getting all Restaurants>', error);
        return error
    }
};
