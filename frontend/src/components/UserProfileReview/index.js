import React, { useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { rem } from "polished";
import { UserProfileTitle } from "../../style/GlobalTitles";

const CommentContainer = styled.div`
  width: 620px;
  padding: 15px 15px 0 15px;
  background-color: #fff;
`;

const CommentWrapper = styled.div`
  display: flex;
  min-height: 80px;
  padding: 15px 10px 15px 0;
  justify-content: space-between;
  font-size: ${rem("12px")};
  line-height: ${rem("14px")};
  font-weight: 300;
  border-bottom: 1px solid #ebebeb;
`;

const ReviewCommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  font-size: ${rem("14px")};
  line-height: ${rem("16px")};
  a {
    font-size: 20px;
    line-height: 23px;
    color: #4c4c4c;
  }
  p {
    font-weight: 300;
    font-size: ${rem("16px")};
    line-height: ${rem("18px")};
    text-align: justify;
    color: #303030;
  }
`;

const TitleWrapper = styled.div`
  margin-bottom: 12px;
`;

const TitleRestaurant = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    font-weight: 300;
    font-size: ${rem("12px")};
    line-height: ${rem("14px")};
    color: #303030;
  }
`;

const StarWrapper = styled.div`
  margin: 15px 0;
`;

const UserProfileReview = () => {
  // const initialState = {
  //   toggle: true,
  // };

  // const [value, setValue] = useState(initialState);

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
