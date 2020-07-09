import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useRouteMatch } from "react-router-dom";

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

const UserProfileReview = ({
  searchUserReviewsAction,
  // targetUser,
  location,
}) => {
  // const displayMessage = () => (!targetUser ? <GenericSpinner /> : null);

  const match = useRouteMatch();

  // useEffect(() => {
  //   if (location.pathname === "/userprofile/") {
  //     searchUserReviewsAction("me");
  //   } else {
  //     searchUserReviewsAction(match.params.userId);
  //   }
  // }, [searchUserReviewsAction]);

  return (
    <CommentContainer>
      <TitleWrapper>
        <UserProfileTitle>Reviews</UserProfileTitle>
      </TitleWrapper>
      <CommentWrapper>
        <ReviewCommentWrapper>
          <TitleRestaurant>
            <a>Läderach Chocolatier Suisse</a>
            <p>02.03.2020 22:29</p>
          </TitleRestaurant>
          <StarWrapper>★★★★★</StarWrapper>
          <p>
            Monotonectally productize virtual internal or "organic" sources
            vis-a-vis error-free opportunities. Holisticly disintermediate
            market-driven deliverables through integrated human capital.
            Continually.
          </p>
        </ReviewCommentWrapper>
      </CommentWrapper>
      <CommentWrapper>
        <ReviewCommentWrapper>
          <TitleRestaurant>
            <a>Läderach Chocolatier Suisse</a>
            <p>02.03.2020 22:29</p>
          </TitleRestaurant>
          <StarWrapper>★★★★★</StarWrapper>
          <p>
            Efficiently repurpose interoperable internal or "organic" sources
            through transparent alignments. Holisticly incubate.
          </p>
        </ReviewCommentWrapper>
      </CommentWrapper>
    </CommentContainer>
  );
};

const mapStateToProps = (state) => {
  // const notEmpty = state.userInfoReducer.targetUser.length;
  console.log(state.reviewsUser);
  return {
    reviewsUser: state.userReviewReducer,
    // notEmpty: notEmpty
  };
};

export default connect(mapStateToProps, { searchUserReviewsAction })(
  UserProfileReview
);
