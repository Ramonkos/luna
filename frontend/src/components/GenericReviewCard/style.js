import styled from "styled-components";

export const ReviewMainContainer = styled.div`
  position: relative;
  width: 271px;
  height: 410px;
  background: white;
  border-radius: 3px;
  border: 1px solid #EBEBEB;
`;

export const TopBar = styled.div`
  background: #E47D31;
  height: 8px;
  width: 100%;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
`;

export const RestaurantNameContainer = styled.div`
  height: 21px;
  margin-top: 14.5px;
  margin-left: 11px;
  
  color: #E47D31;
  font-family: Helvetica,serif;
  font-weight: bold;
  font-style: normal;
  font-size: 20px;
  line-height: 23px;
`;

export const RestaurantReviewContainer = styled.div`
  height: 80px;
  width: 249px;
  margin-top: 8px;
  margin-left: 11px;
  margin-bottom: 0;
  overflow-wrap: break-word;
    
  font-family: Helvetica,serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #4C4C4C;
  
  a {
    font-family: Helvetica,serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #E47D31;
  }
`;

export const ButtonContainer = styled.div`
  height: 33px;
  width: 249px;
  margin-top: 22px;
  margin-left: 11px;
  margin-bottom: 0;
`;

export const LatestCommentsTitle = styled.div`
  height: 23px;
  margin-left: 9.5px;
  margin-top: 17px;
  margin-bottom: 11px;
  
  font-family: Helvetica,serif;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 23px;
  color: #000000;
`;

export const CommentsContainer = styled.div`
  margin-left: 12px;
  margin-top: 0;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  
    h1 {
      height: 16px;
      margin-bottom: 3px;
      
      color: #E47D31;
      font-family: Helvetica,serif;
      font-weight: bold;
      font-style: normal;
      font-size: 14px;
      line-height: 16px;      
    }
    
    h2 {
      color: #000000;
      font-family: Helvetica,serif;
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 16px;
    }
`;


