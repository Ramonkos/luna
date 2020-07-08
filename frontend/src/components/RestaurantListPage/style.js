import React from 'react';
import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #FFFFFF;
  height: 50px;
  width: 100%;
  border: 1px solid #D8D8D8;
  
  input {
    width: 75%;
    height: 100%;
    padding-left: 30px; 
    border-right: 1px solid #D8D8D8;
    border-left: none;
    border-top: none;
    border-bottom: none;
    
    font-family: Helvetica,serif;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    
    color: #D8D8D8;
  }
  
  select {
    width: 25%;
    height: 100%;
    }
`;

export const Selector = styled.select`
    width: 25%;
    height: 100%;
    color: #D8D8D8;
    font-family: Helvetica,serif;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    padding-left: 38px;
    border: none;
`;

export const TitleMasterContainer = styled.div`
  display: flex;
   justify-content: center;
  
`

export const TitleContainer = styled.div`
  width: 630px;
  height: 54.5px;
  display: flex;
  flex-direction: row;
  align-content: space-between;
  border-bottom: 1px solid #D8D8D8;
  
  a {
    margin-top: 19px;
    width: 200px;
    height: 23px;
    font-family: Helvetica,serif;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    
    text-align: center;
    text-transform: uppercase;
    
    color: #4C4C4C;
  }
`;
//TODO: Add active link (orange line)


export const BestRatedWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 44px;
`;

export const CardWrapper = styled.div`
  width: 1170px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
