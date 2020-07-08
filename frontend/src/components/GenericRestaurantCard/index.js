import React from 'react';
import {useHistory} from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';
import {defaultRestaurantCardPicture} from '../../constants';
import {
    RestaurantAddress,
    RestaurantDetailsContainer,
    RestaurantMainContainer,
    RestaurantName,
    StarsReviewContainer,
    TopBar
} from "./style";


export const GenericRestaurantCard = ({restaurant}) => {

    const history = useHistory();

    const onClickHandler = () => {
        history.push(`/restaurants/${restaurant.id}/`)
    };

    return (
        <RestaurantMainContainer onClick={onClickHandler}>
            <TopBar/>
            <RestaurantDetailsContainer>
                <RestaurantName>{restaurant.name}</RestaurantName>
                <RestaurantAddress>{`${restaurant.city}, ${restaurant.country}`}</RestaurantAddress>
                <StarsReviewContainer>
                    <StarRatingComponent
                        name='Restaurant_Rating'
                        editing={false}
                        starCount={5}
                        value={Math.round(restaurant.review_average)}
                    />
                    <p>{restaurant.restaurant_reviews.length}</p>
                </StarsReviewContainer>
            </RestaurantDetailsContainer>
            <img src={restaurant.restaurant_image ? restaurant.restaurant_image : defaultRestaurantCardPicture}
                 alt='Restaurant'/>
        </RestaurantMainContainer>
    )
};