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

const Title = styled.h3`
  
`;

const UserProfileComment = (props) => {
  // const initialState = {
  //   toggle: true,
  // };

  // const [value, setValue] = useState(initialState);

  return (
    <CommentContainer>
      <CommentWrapper>
        <NameCommentWrapper>
          <a>James Bon</a>
          <p>I like it...</p>
        </NameCommentWrapper>
        <p>02.03.2020 22:29</p>
      </CommentWrapper>
    </CommentContainer>
  );
};

export default UserProfileComment;
