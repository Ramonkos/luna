import React from 'react';
import styled from "styled-components";


export const ReviewMainContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const RestaurantContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1440px;
  height: 204px;
  margin-bottom: 40px;
  
  img {
    position: absolute;
    width: 100vw;
    height: 204px;
    object-fit: cover;
    object-position: top;
  }
`;

export const Restaurantname = styled.div`
    position:relative;
    height: 34px;
    margin-left: 130px;
    margin-top: 33px;
    margin-bottom: 0;
    
    font-family: Helvetica,serif;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 34px;
    color: #FFFFFF
`;

export const Darkbackground = styled.div`
    position: absolute;
    height: 204px;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    `;

export const Restaurantdescription = styled.div`
    position: relative;
    height: 28px;
    margin-left: 130px;
    margin-top: 13px;
    
    font-family: Helvetica,serif;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF  
`;

export const StarsReviewContainer = styled.div`
  display: flex;
  margin-top: 13px;
  height: 27px;
  margin-left: 130px;
  
  p {
    margin: 8px 0 0 30px;
    font-family: Helvetica,serif;
    font-stretch: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #FFFFFF;
  }
  i {
    font-size: 27px;
  }
`;

export const RatingContainer = styled.div`
  position: relative;
  width: 100%;
  height: 668px;
  
  textarea {
    height: 264.5px;
    width: 832px;
    background-color: white;
    border: 1px solid #E3E3E3;
    margin-left: 304px;
    margin-top: 23px;
    padding-left: 18px;
    padding-top: 21px;
    
    font-family: Helvetica,serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    color: #BBB7B7;   
    }
`;

export const SelectRatingContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  top: 13px;
  height: 44px;
  margin-left: 341px;
  margin-bottom: 25px;
  
  /* largestars {
    position: relative;
    height: 44px;
    width: 250px;
    background-color: yellow;
  } */
  i {
    
  }
 
  p {
    height: 23px;
    margin-top: 18px;
    margin-bottom: 10.5px;
    margin-left: 33px;
    
    font-family: Helvetica,serif;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 23px;
    color: #7E7E7E
  }
  i {
    font-size: 40px;
  }
`;

export const ErrorButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  //justify-items: space-between;
  
  position:relative;
  width: 832px;
  margin-left: 304px;
  
  errormessage {
    position: relative;
    top: 8.5px;
    
    font-family: Helvetica,serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    color: #B00000
  }
`
export const ButtonContainer = styled.div`
  position: relative;
  top: 14.5px;
`
