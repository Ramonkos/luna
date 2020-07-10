import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import styled from "styled-components";
import { rem } from "polished";
import { UserProfileTitle } from "../../style/GlobalTitles";
import { getUserCommentsAction } from "../../store/actions/commentAction";
import GenericSpinner from "../GenericSpinner";

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
    color: #4c4c4c;
    margin-bottom: 15px;
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

const UserProfileComment = ({
  getUserCommentsAction,
  userComments,
  user_id,
  notEmpty,
}) => {
  const displayMessage = () => (!notEmpty ? <GenericSpinner /> : null);

  useEffect(() => {
    console.log("user_id", user_id);
    getUserCommentsAction(user_id);
  }, [getUserCommentsAction]);

  return (
    <CommentContainer>
      <TitleWrapper>
        <UserProfileTitle>Comments</UserProfileTitle>
      </TitleWrapper>
      {userComments.map((comment, i) => {
        return (
          <CommentWrapper>
            <ReviewCommentWrapper>
              <a>Review {i + 1}</a>
              <p>{comment.text_content}</p>
            </ReviewCommentWrapper>
            <p>
              {comment.created.slice(0, 10) +
                " " +
                comment.created.slice(11, 16)}
            </p>
          </CommentWrapper>
        );
      })}
    </CommentContainer>
  );
};

const mapStateToProps = (state) => {
  const notEmpty = state.restaurantReducer.userComments.length;
  return {
    userComments: state.restaurantReducer.userComments,
    notEmpty: notEmpty,
  };
};

export default connect(mapStateToProps, { getUserCommentsAction })(
  UserProfileComment
);
