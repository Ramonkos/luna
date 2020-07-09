import React, { useState } from "react";
import { Link } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";

import {
  SmallestOrangeButton,
  GreyLeftButton,
  GreyRightButton,
} from "../../../src/style/GlobalButton";

import { UserDetailContainer } from "../../../src/style/GlobalShortUserProfile";
import Avatar from "../../assets/laurent.jpg";
import IconLike from "../../assets/like.png";

import styled from "styled-components";
import { rem } from "polished";

const ReviewContainer = styled.div`
  width: 650px;
  color: #000000;
`;

const UserRatingWrapper = styled.div`
  height: 68px;
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

const LeftUserRatingWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 380px;
`;

const ReviewCommentInputWrapper = styled.div`
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

const CommentsDisplayedWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    color: #e47d31;
    font-weight: normal;
  }
`;

const InputButtonWrapper = styled.div`
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

const CommentsHiddenWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    color: #e47d31;
    font-weight: normal;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  img {
    width: 17px;
    height: 21px;
    margin-right: 10px;
  }
`;

const CommentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${rem("12px")};
  line-height: ${rem("14px")};
  font-weight: 300;
  color: #000000;
  padding: 10px;
  border-bottom: 1px solid #ebebeb;
`;

const NameCommentWrapper = styled.div`
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

const StarWrapper = styled.div`
  width: 214px;
  display: flex;
  i {
    font-size: 27px;
  }
  /* margin-left: 20px; */
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
          <UserDetailContainer>
            <img src={Avatar} alt="profile picture" />
            <div>
              <h1>Laurent H.</h1>
              <h2>6 Reviews in total</h2>
            </div>
          </UserDetailContainer>
          <StarWrapper>
            <StarRatingComponent
              name="Restaurant_Rating"
              starColor={"#F8E71C"}
              emptyStarColor={"rgba(235, 235, 235, 0.5)"}
              editing={false}
              starCount={5}
              value={4}
              // value={Math.round(restaurant.review_average)}
            />
          </StarWrapper>
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
              <GreyLeftButton>
                <img src={IconLike} alt="like icon" />
                Like 64
              </GreyLeftButton>
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
              <a>James Bond</a>
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
