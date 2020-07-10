import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #FFFFFF;
  height: 50px;
  width: 100%;
  border: 1px solid #D8D8D8;
  align-self: flex-start;
  
  input {
    width: 100%;
    height: 100%;
    padding-left: 30px; 
    border: none;
    
    font-family: Helvetica,serif;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    
    color: #979797;
    
    ::-webkit-input-placeholder { /* Edge */
      color: #979797;
    }
    
    :-ms-input-placeholder { /* Internet Explorer 10-11 */
      color: #979797;
    }
    
    ::placeholder {
      color: #979797;
    }
  }
`;

export const TitleMasterContainer = styled.div`
  display: flex;
   justify-content: center;
  
`;

export const TitleContainer = styled.div`
  width: 630px;
  height: 54.5px;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #D8D8D8;
  
`;

export const LinkWrapper = styled.div`
    margin-top: 19px;
    width: 200px;
    height: 23px;
    display: flex;
    justify-content: center;
    
    a {
    font-family: Helvetica,serif;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    
    text-align: center;
    text-transform: uppercase;
    color: #4C4C4C;
    }
    
    .active {
      border-bottom: 3px solid #e47d31;
      width: 205px;
      margin-bottom: -11px;
    }
`;


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