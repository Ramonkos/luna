import { rem } from "polished";
import styled from 'styled-components'
import React from "react";

// TODO check font color opacity. Figma can't be good

export const Input = styled.input`
    height: ${rem('50px')};  // was 52 px, unified it to 50
    width: ${rem('340px')};
    background-color: white;
    border: 1px solid #EBEBEB;
    border-radius: 3px;
    padding-left: ${rem('23px')};
    box-sizing: border-box;  //TODO create global style with basic elements
    font-family: Helvetica,serif;
    font-style: normal;
    font-weight: bold;
    font-size: ${rem('20px')};
    line-height: ${rem('23px')};
    color: #979797;    
    &:focus {
      outline: none;
    }    
`

export const RestaurantCreationInput = styled(Input)`
    width: ${rem('370px')};
    color: #999999;
    font-family: Karla,serif;  //TODO Get Karla font style
    font-weight: normal;
    font-size: ${rem('22px')};
    line-height: ${rem('26px')};
`

export const SearchBarInput = styled(Input)`
    width: ${rem('1150px')};
    border-radius: 0;
    border-left: none;
    border-right: 1px solid #D8D8D8;
    color: #D8D8D8;
`

export const InputErrorWrapper = styled.div`
    height: ${rem('70px')};  // was 52 px, unified it to 50
    width: ${rem('340px')};
    display: flex;
    flex-flow: column;
    justify-content: space-between;
`

export const ErrorMessage = styled.div`
    height: ${rem('20px')};
    //width: ${rem('340px')};
    text-align: center;
    color: red;
    font-weight: bold;
    justify-content: center;
    margin: ${rem('25px')} 0;
`


export const GeneralInput = (props) => {
    return (
        <InputErrorWrapper>
            <Input placeholder={props.placeholder} type={props.type}/>
            <ErrorMessage>{props.errorMessage ? props.errorMessage : ''}</ErrorMessage>
        </InputErrorWrapper>
    )
}

export const RestaurantGeneralInput = (props) => {
    return (
        <InputErrorWrapper>
            <RestaurantCreationInput placeholder={props.placeholder} type={props.type}/>
            <ErrorMessage>{props.errorMessage ? props.errorMessage : ''}</ErrorMessage>
        </InputErrorWrapper>
    )
}