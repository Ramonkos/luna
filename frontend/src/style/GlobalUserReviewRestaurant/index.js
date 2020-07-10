import styled from "styled-components";
import { rem } from "polished";

export const CommentContainer = styled.div`
  width: 620px;
  padding: 15px 15px 0 15px;
  background-color: #fff;
  border-right: 1px solid #ebebeb;
  margin-bottom: 100px;
  height: 500px;
  overflow: scroll;
`;

export const CommentWrapper = styled.div`
  display: flex;
  min-height: 80px;
  padding: 15px 10px 15px 0;
  justify-content: space-between;
  font-size: ${rem("12px")};
  line-height: ${rem("14px")};
  font-weight: 300;
  border-bottom: 1px solid #ebebeb;
`;

export const ReviewCommentWrapper = styled.div`
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

export const TitleWrapper = styled.div`
  margin-bottom: 12px;
`;

export const TitleRestaurant = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    font-weight: 300;
    font-size: ${rem("12px")};
    line-height: ${rem("14px")};
    color: #303030;
  }
`;

export const StarWrapper = styled.div`
  margin: 15px 0;
  i {
    font-size: 27px;
  }
`;