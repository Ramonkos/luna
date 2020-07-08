import React from 'react';
import styled from "styled-components";
import {defaultRestaurantPageBanner} from '../../constants';


export const RestaurantContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 496px;
  background-image: url("https://via.placeholder.com/1440x496"); //TODO change URL to constant folder
  
  darkbackground {
    position: absolute;
    height: 204px;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
   
  restaurantname {
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
  }
  
  restaurantdescription {
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
  }
`;

export const StarsReviewContainer = styled.div`
  display: flex;
  margin-top: 13px;
  height: 27px;
  margin-left: 130px;
  z-index: 1;
  
  p {
    margin-left: 30px;
  
    font-family: Helvetica,serif;
    font-stretch: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #FFFFFF;
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
      height: 100%;
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