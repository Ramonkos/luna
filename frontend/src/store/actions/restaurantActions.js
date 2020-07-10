import Axios from '../../axios';
import {
    GET_TOP_4_RESTAURANTS,
    CREATE_RESTAURANT,
    GET_ALL_RESTAURANTS,
    SEARCH_ALL_RESTAURANTS,
    SEARCH_RESTAURANTS_BY_CATEGORY,
    GET_SPECIFIC_RESTAURANT,
    GET_FROM_USER_RESTAURANT,
} from '../actionTypes';

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

export const searchAllRestaurants = (restaurantInfo) => {
    return {
        type: SEARCH_ALL_RESTAURANTS,
        payload: restaurantInfo
    }
};

export const searchRestaurantsByCategory = (restaurantInfo) => {
    return {
        type: SEARCH_RESTAURANTS_BY_CATEGORY,
        payload: restaurantInfo
    }
};

export const getSpecificRestaurant = (restaurantInfo) => {
    return {
        type: GET_SPECIFIC_RESTAURANT,
        payload: restaurantInfo
    }
}

export const getFromUserRestaurant = (restaurantInfo) => {
    return {
        type: GET_FROM_USER_RESTAURANT,
        payload: restaurantInfo
    }
}

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
        const response = await Axios.post('restaurants/new/', data);
        return response
    } catch (error) {
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

export const searchAllRestaurantsAction = (search_string) => async (dispatch) => {
    try {
        const response = await Axios.get(`search/${search_string}`);
        dispatch(searchAllRestaurants(response.data));
        return response
    } catch (error) {
        console.log('Error in searching Restaurants>', error);
        return error
    }
};

export const searchRestaurantsByCategoryAction = (category) => async (dispatch) => {
    try {
        const response = await Axios.get(`restaurants/category/${category}/`);
        dispatch(searchRestaurantsByCategory(response.data));
        return response
    } catch (error) {
        console.log('Error in searching Restaurants by Category>', error);
        return error
    }
};

export const getSpecificRestaurantAction = (restaurant_id) => async (dispatch) => {
    try {
        const response = await Axios.get(`restaurants/${restaurant_id}/`);
        dispatch(getSpecificRestaurant(response.data));
        return response
    } catch (error) {
        console.log('Error in getting specific Restaurant>', error);
        return error
    }
};

export const getFromUserRestaurantAction = (user_id) => async (dispatch) => {
    try {
        const response = await Axios.get(`restaurants/user/${user_id}/`);
        dispatch(getFromUserRestaurant(response.data));
        return response
    } catch (error) {
        console.log('Error in getting Restaurants>', error);
        return error
    }
};
