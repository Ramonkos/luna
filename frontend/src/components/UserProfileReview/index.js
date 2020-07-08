import React, { useState } from "react";
import { Link } from "react-router-dom";

import { UserProfileTitle } from "../../style/GlobalTitles";
import {
  CommentContainer,
  CommentWrapper,
  ReviewCommentWrapper,
  TitleWrapper,
  TitleRestaurant,
  StarWrapper
} from "../../style/GlobalUserReviewRestaurant";

const UserProfileReview = () => {

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

export default UserProfileReview;
