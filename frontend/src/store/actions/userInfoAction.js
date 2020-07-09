import Axios from "../../axios";
import {
  GET_USER_INFORMATION,
  GET_USER_REVIEWS,
  GET_USER_COMMENTS,
  UPDATE_USER,
} from "../actionTypes";

export const userInformation = (userInformation) => {
  return {
    type: GET_USER_INFORMATION,
    payload: userInformation,
  };
};

// export const userReviews = (userInformation) => {
//   return {
//     type: GET_USER_REVIEWS,
//     payload: userInformation,
//   };
// };

// export const userComments = (userInformation) => {
//   return {
//     type: GET_USER_COMMENTS,
//     payload: userInformation,
//   };
// };

// export const updatedInformation = (userInformation) => {
//   return {
//     type: UPDATE_USER,
//     payload: userInformation,
//   };
// };

export const getUserInformationAction = (user_id) => async (dispatch) => {
  try {
    const response = await Axios.get(`users/${user_id}/`);
    dispatch(userInformation(response.data));
    return response;
  } catch (error) {
    console.log("Error fetching user information>", error);
    return error;
  }
};

// export const getUserReviewsAction = () => async (dispatch) => {
//   try {
//       const response = await Axios.get('home/');
//       dispatch(top4Restaurants(response.data));
//       return response
//   } catch (error) {
//       console.log('Error fetching Top 4 Restaurants>', error);
//       return error
//   }
// };

// export const getUserCommentsAction = () => async (dispatch) => {
//   try {
//       const response = await Axios.get('home/');
//       dispatch(top4Restaurants(response.data));
//       return response
//   } catch (error) {
//       console.log('Error fetching Top 4 Restaurants>', error);
//       return error
//   }
// };

// export const getUserRestaurantsAction = () => async (dispatch) => {
//   try {
//       const response = await Axios.get('home/');
//       dispatch(top4Restaurants(response.data));
//       return response
//   } catch (error) {
//       console.log('Error fetching Top 4 Restaurants>', error);
//       return error
//   }
// };

// export const updateUserAction = () => async (dispatch) => {
//   try {
//     const response = await Axios.post("restaurants/new/", { ...data });
//     return response;
//   } catch (error) {
//     console.log("Error updating user>", error);
//     return error;
//   }
// };
