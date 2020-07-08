import React, { useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { rem } from "polished";
import { UserProfileTitle } from "../../style/GlobalTitles";


const CommentContainer = styled.div`
  width: 620px;
  padding: 15px 15px 0 15px;
  background-color: #fff;
  border-right: 1px solid #ebebeb;
`;

const CommentWrapper = styled.div`
  display: flex;
  height: 80px;
  padding: 10px 10px 10px 0;
  justify-content: space-between;
  font-size: ${rem("12px")};
  line-height: ${rem("14px")};
  font-weight: 300;
  color: #000000;
  border-bottom: 1px solid #ebebeb;
  p {
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    text-align: right;
    color: #303030;
  }
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
    color: #4C4C4C;
    margin-bottom: 15px
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
  margin-bottom: 15px;
`;

const UserProfileComment = (props) => {

  return (
    <CommentContainer>
      <TitleWrapper>
        <UserProfileTitle>Comments</UserProfileTitle>
      </TitleWrapper>
      <CommentWrapper>
        <ReviewCommentWrapper>
          <a>Review 1</a>
          <p>I like it...</p>
        </ReviewCommentWrapper>
        <p>02.03.2020 22:29</p>
      </CommentWrapper>
      <CommentWrapper>
        <ReviewCommentWrapper>
          <a>Review 2</a>
          <p>I don't like it...</p>
        </ReviewCommentWrapper>
        <p>02.03.2020 22:29</p>
      </CommentWrapper>
    </CommentContainer>
  );
};

export default UserProfileComment;
