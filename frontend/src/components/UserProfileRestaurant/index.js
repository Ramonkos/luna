import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

const ButtonRestaurantContainer = styled.div`
  width: 620px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
`;

const UserProfileRestaurant = () => {
  return (
    <ButtonRestaurantContainer>
      <CommentContainer>
        <TitleWrapper>
          <UserProfileTitle>Restaurants</UserProfileTitle>
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
      <ButtonWrapper>
        <Button>Create Restaurant</Button>
      </ButtonWrapper>
    </ButtonRestaurantContainer>
  );
};

export default UserProfileRestaurant;
