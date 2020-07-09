import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { UserProfileTitle } from "../../style/GlobalTitles";
import {
  CommentContainer,
  CommentWrapper,
  ReviewCommentWrapper,
  TitleWrapper,
  TitleRestaurant,
  StarWrapper,
} from "../../style/GlobalUserReviewRestaurant";
import { searchUserReviewsAction } from "../../store/actions/reviewActions";
import GenericSpinner from "../GenericSpinner";
import StarRatingComponent from "react-star-rating-component";

const UserProfileReview = ({
  searchUserReviewsAction,
  userReviewResults,
  user_id,
  notEmpty,
}) => {
  const displayMessage = () => (!notEmpty ? <GenericSpinner /> : null);

  useEffect(() => {
    console.log("user_id", user_id);
    searchUserReviewsAction(user_id);
  }, [searchUserReviewsAction]);

  return (
    <CommentContainer>
      <TitleWrapper>
        <UserProfileTitle>Reviews</UserProfileTitle>
      </TitleWrapper>
      {userReviewResults.map((review) => {
        return (
          <CommentWrapper>
            <ReviewCommentWrapper>
              <TitleRestaurant>
                <Link to={`/restaurants/${review.restaurant_review_about.id}/`}>
                  {review.restaurant_review_about.name}
                </Link>
                <p>
                  {review.created.slice(0, 10) +
                    " " +
                    review.created.slice(11, 16)}
                </p>
              </TitleRestaurant>
              <StarWrapper>
                <StarRatingComponent
                  name="Restaurant_Rating"
                  starColor={"#F8E71C"}
                  emptyStarColor={"rgba(235, 235, 235, 0.5)"}
                  editing={false}
                  starCount={5}
                  value={review.rating}
                />
              </StarWrapper>
              <p>{review.text_content}</p>
            </ReviewCommentWrapper>
          </CommentWrapper>
        );
      })}
    </CommentContainer>
  );
};

const mapStateToProps = (state) => {
  const notEmpty = state.reviewReducer.userReviewResults.length;
  return {
    userReviewResults: state.reviewReducer.userReviewResults,
    notEmpty: notEmpty,
  };
};

export default connect(mapStateToProps, { searchUserReviewsAction })(
  UserProfileReview
);
