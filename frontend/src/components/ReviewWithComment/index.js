import React, { useState } from "react";
import { Link } from "react-router-dom";

// import { HeaderContainer } from "./style.js";
// import { LinkButtonWrapper } from "./style.js";
import {
  SmallestOrangeButton,
  GreyLeftButton,
  GreyRightButton,
} from "../../../src/style/GlobalButton";

import {
  UserDetailContainer,
  namereviewsContainer,
  name,
  reviews,
} from "../../../src/style/GlobalShortUserProfile";

import styled from "styled-components";
import { rem } from "polished";

export const ReviewContainer = styled.div`
  width: 650px;
  color: #000000;
`;

export const UserRatingWrapper = styled.div`
  height: 50px;
  border-bottom: 1px solid #ebebeb;
  display: flex;
  justify-content: space-between;
  p {
    font-weight: 300;
    font-size: ${rem("14px")};
    line-height: ${rem("16px")};
    padding: 10px;
  }
`;

export const LeftUserRatingWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ReviewCommentInputWrapper = styled.div`
  border-bottom: 1px solid #ebebeb;
  padding: 10px;
  align-items: center;
  p {
    text-align: left;
    font-weight: 300;
    font-size: ${rem("16px")};
    line-height: ${rem("18px")};
  }
`;

export const CommentsDisplayedWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    color: #e47d31;
    font-weight: normal;
  }
`;

export const InputButtonWrapper = styled.div`
  display: flex;
  input {
    width: 414px;
    margin-right: 10px;
    font-size: ${rem("14px")};
    line-height: ${rem("16px")};
    color: #d8d8d8 !important;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    padding-left: 10px;
  }
`;

export const CommentsHiddenWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    color: #e47d31;
    font-weight: normal;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;

export const CommentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${rem("12px")};
  line-height: ${rem("14px")};
  font-weight: 300;
  color: #000000;
  padding: 10px;
  border-bottom: 1px solid #ebebeb;
`;

export const NameCommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: ${rem("14px")};
  line-height: ${rem("16px")};
  a {
    font-weight: bold;
    color: #e47d31;
  }
`;

const ReviewWithComment = (props) => {
  const initialState = {
    toggle: true,
  };

  const [value, setValue] = useState(initialState);

  return (
    <ReviewContainer>
      <UserRatingWrapper>
        <LeftUserRatingWrapper>
          <div>Placeholder for Userdetails</div>
          {/* <UserDetailContainer>
            <img src={defaultRestaurantCardPicture} alt="profile picture" />
            <namereviewsContainer>
              <name>Laurent H.</name>
              <reviews>6 Reviews in total</reviews>
            </namereviewsContainer>
          </UserDetailContainer> */}
          <div>★★★★★</div>
        </LeftUserRatingWrapper>
        <p>01.01.2020 15:10</p>
      </UserRatingWrapper>

      <ReviewCommentInputWrapper>
        <p>
          Dynamically envisioneer goal-oriented mindshare through go forward
          alignments. Dramatically strategize equity invested strategic theme
          areas and vertical core competencies.
        </p>
        {value.toggle ? (
          <CommentsHiddenWrapper>
            <ButtonWrapper>
              <GreyLeftButton>Like 64</GreyLeftButton>
              <GreyRightButton>Comment 23</GreyRightButton>
            </ButtonWrapper>
            <p onClick={() => setValue({ toggle: !value.toggle })}>
              View all comments
            </p>
          </CommentsHiddenWrapper>
        ) : (
          <CommentsDisplayedWrapper>
            <InputButtonWrapper>
              <input type="text" placeholder="Write comment"></input>
              <SmallestOrangeButton>Post</SmallestOrangeButton>
            </InputButtonWrapper>
            <p onClick={() => setValue({ toggle: !value.toggle })}>Hide</p>
          </CommentsDisplayedWrapper>
        )}
      </ReviewCommentInputWrapper>
      {value.toggle ? null : (
        <>
          <CommentWrapper>
            <NameCommentWrapper>
              <a>Tarzan</a>
              <p>Very tasty restaurant...</p>
            </NameCommentWrapper>
            <p>02.03.2020 22:29</p>
          </CommentWrapper>
          <CommentWrapper>
            <NameCommentWrapper>
              <a>James Bon</a>
              <p>I like it...</p>
            </NameCommentWrapper>
            <p>02.03.2020 22:29</p>
          </CommentWrapper>
        </>
      )}
    </ReviewContainer>
  );
};

export default ReviewWithComment;
