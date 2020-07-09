import React from 'react';
import styled from "styled-components";

export const RestaurantContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 496px;
  
  img {
    position: absolute;
    width: 100%;
    height: 496px;
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
  z-index: 1;
  
  p {
    margin: 9px 30px;
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

export const Stars = styled.div`
  background-color: yellow;
  width: 135px;
  left: 16px;
  text-align: center;
`;

export const MapContactContainer = styled.div`
  width: 361px;
  height: 336px;
  background-color: white;
  z-index: 2;
  position: absolute;
  margin-top: 27px;
  margin-left: 956px;
  display: flex;
  flex-direction: column;
`;

export const MapContainer = styled.div`
    width: 100%;
    height: 167px;
    
    img {
      width: 100%;
      height: 167px;
    }
`;

export const ContactContainer = styled.div`
  width: 100%;
  height: 120px;
  margin-top: 25px;
  display: flex;
  flex-direction: row;
`;

export const IconContainer = styled.div`
  width: 82px;
  height: 120px;
  margin-right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  
  img {
  position: relative;
  width: 20px;
  height: 24px;
  }
`;

export const ContactDetailsContainer = styled.div`
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  p {   
    font-family: Helvetica,serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
  }
`;

export const MiddleContainer = styled.div`
  height: 58px;
  width: 1440px;
  display: flex;
  flex-direction: row;
`;

export const SearchFilterContainer = styled.div`
  margin-top: 15px;
  height: 40px;
  width: 802px;
  padding-left: 130px;
  display: flex;
  flex-direction: row;
    
    input {
        height: 40px;
        width: 510px;
        background-color: white;
        border: 1px solid #E3E3E3;

        padding-left: 11px;
        
        font-family: Helvetica,serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 18px;
        color: #979797;
        }
`;

export const FilterButtonContainer = styled.div`
  height: 40px;
  width: 120px;
  margin-left: 20px;
`;

export const OpeningHoursContainer = styled.div`
  padding-top: 15px;
  margin-left: 0;
  width: 508px;
  background-color: #F5F5F5;
  display: flex;
  flex-direction: row;
`;

export const Icon = styled.div`
    position: relative;
    height: 18px;
    width: 18px;
    margin-left: 17px;
    top: 8px;
`;
  
export const Time = styled.div`
    position: relative;
    margin-left: 25px;
    display: flex;
    align-items: center;
    
    font-family: Helvetica,serif;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 23px;
`;

export const BottomContainer = styled.div`
  height: 588px;
  width: 1440px;
  display: flex;
  flex-direction: row;
`;

export const RightBottomContainer = styled.div`
  
`

export const CommentContainer = styled.div`
  height: 588px;
  width: 802px;
  text-align: center;
  padding-left: 130px;
  padding-top: 27px;
`;

export const PriceReviewEditContainer = styled.div`
  height: 588px;
  width: 508px;
    background-color: #F5F5F5;
`;

export const PriceContainer = styled.div`
  border-top: 1px solid #D8D8D8;
  padding-top: 15px;
  margin-left: 0;
  width: 508px;

  display: flex;
  flex-direction: row;
`;

export const IconPrice = styled.div`
    position: relative;
    height: 18px;
    width: 18px;
    margin-left: 17px;
`;

export const PriceLevel = styled.div`
    position: relative;
    margin-left: 25px;
    display: flex;
    align-items: center;
    
    font-family: Helvetica,serif;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 23px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 39px;
  margin-top: 30px;
  justify-content: space-around;
`
