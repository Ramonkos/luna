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


export const GenericRestaurantCard = ({item}) => {

    const history = useHistory();

    const onClickHandler = () => {
        history.push(`/restaurants/${item.id}/`)
    };

    return (

        <RestaurantMainContainer onClick={onClickHandler}>
            <TopBar/>
            <RestaurantDetailsContainer>
                <RestaurantName>{item.name.length > 20 ? `${item.name.slice(0, 20)}...` : item.name}</RestaurantName>
                <RestaurantAddress>{`${item.city}, ${item.country}`}</RestaurantAddress>
                <StarsReviewContainer>
                    <StarRatingComponent
                        name='Restaurant_Rating'
                        starColor={"#F8E71C"}
                        emptyStarColor={"rgba(235, 235, 235, 0.5)"}
                        starDimension={"30px"}
                        editing={false}
                        starCount={5}
                        value={Math.round(item.review_average)}
                    />
                    <p>{item.restaurant_reviews.length}</p>
                </StarsReviewContainer>
            </RestaurantDetailsContainer>
            <img src={item.restaurant_image ? item.restaurant_image : defaultRestaurantCardPicture}
                 alt='Restaurant'/>
        </RestaurantMainContainer>

    )
};