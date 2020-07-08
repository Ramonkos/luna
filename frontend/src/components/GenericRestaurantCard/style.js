import React from 'react';
import styled from "styled-components";

export const RestaurantMainContainer = styled.div`
  position: relative;
  width: 271px;
  height: 410px;
  background: white;
  border-radius: 3px;
  border: 1px solid #EBEBEB;
  img {
      height: 283px;
      width: 100%;
      margin: 0px;
      border-bottom-right-radius: 3px;
      border-bottom-left-radius: 3px;
  }
`;

export const TopBar = styled.div`
  background: #E47D31;
  height: 8px;
  width: 100%;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
`;

export const RestaurantDetailsContainer = styled.div`
  height: 118px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const RestaurantName = styled.p`
    height: 23px;
    margin-left: 13px;
    margin-top: 11px;
    margin-bottom: 0px;
    
    font-size: 20px;
    font-family: Helvetica,serif;
    color: #4C4C4C;
    text-align: left;  
`;

export const RestaurantAddress = styled.p`
    height: 21px;
    margin-left: 13px;
    margin-top: 6px;
    margin-bottom: 0px;
    
    
    font-size: 18px;
    color: #4C4C4C;
    text-align: left;  
    font-family: Helvetica,serif;
`;

export const StarsReviewContainer = styled.div`
  display: flex;
  margin-top: 12px;
  height: 27px;
  p {
    margin-top: 0px;
    width: 23px;
    margin-left: 67px;
  
    font-family: Helvetica,serif;
    font-stretch: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #4C4C4C;
  }
`;

export const Stars = styled.div`
  margin-top: 0px;
  margin-left: 16px;
  background-color: yellow;
  width: 135px;
  left: 16px;
  text-align: center;
`;
