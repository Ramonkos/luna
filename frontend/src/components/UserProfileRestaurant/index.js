import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";

import { UserProfileTitle } from "../../style/GlobalTitles";
import { Button } from "../../style/GlobalButton";
import {
  CommentContainer,
  CommentWrapper,
  ReviewCommentWrapper,
  TitleWrapper,
  TitleRestaurant,
  StarWrapper,
} from "../../style/GlobalUserReviewRestaurant";
import { getFromUserRestaurantAction } from "../../store/actions/restaurantActions";
import StarRatingComponent from "react-star-rating-component";
import GenericSpinner from "../GenericSpinner";

const ButtonRestaurantContainer = styled.div`
  width: 620px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
`;

const UserProfileRestaurant = ({
  getFromUserRestaurantAction,
  user_id,
  notEmpty,
  userRestaurants,
}) => {
  useEffect(() => {
    console.log("user_id", user_id);
    getFromUserRestaurantAction(user_id);
  }, [getFromUserRestaurantAction]);

  const displayMessage = () => (!notEmpty ? <GenericSpinner /> : null);

  return (
    <ButtonRestaurantContainer>
      <CommentContainer>
        <TitleWrapper>
          <UserProfileTitle>Restaurants</UserProfileTitle>
        </TitleWrapper>

        {userRestaurants.map((restaurant) => {
          return (
            <CommentWrapper>
              <ReviewCommentWrapper>
                <TitleRestaurant>
                  <Link to={`/restaurants/${restaurant.id}/`}>{restaurant.name}</Link>
                </TitleRestaurant>
                <StarWrapper>
                  <StarRatingComponent
                    name="Restaurant_Rating"
                    starColor={"#F8E71C"}
                    emptyStarColor={"rgba(235, 235, 235, 0.5)"}
                    editing={false}
                    starCount={5}
                    value={restaurant.review_average}
                  />
                </StarWrapper>
                <p>
                  Monotonectally productize virtual internal or "organic"
                  sources vis-a-vis error-free opportunities. Holisticly
                  disintermediate market-driven deliverables through integrated
                  human capital. Continually.
                </p>
                {/* <p>{restaurant.description}</p> */}
              </ReviewCommentWrapper>
            </CommentWrapper>
          );
        })}
      </CommentContainer>
      <ButtonWrapper>
        <Link to="/restaurant/create/"><Button>Create Restaurant</Button></Link>
      </ButtonWrapper>
    </ButtonRestaurantContainer>
  );
};

const mapStateToProps = (state) => {
  const notEmpty = state.restaurantReducer.userRestaurants.length;
  return {
    userRestaurants: state.restaurantReducer.userRestaurants,
    notEmpty: notEmpty,
  };
};

export default connect(mapStateToProps, { getFromUserRestaurantAction })(
  UserProfileRestaurant
);
