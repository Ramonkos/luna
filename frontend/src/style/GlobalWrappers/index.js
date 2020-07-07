import React from "react";
import styled from "styled-components";
import {UserAccessTitle} from "../GlobalTitles";
import {rem} from "polished";

export const UserAccessContentContainer = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    margin-top: 5%;
`

const UserAccessTitleInnerWrapper = styled.div`
    height: ${rem('46px')};
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;    
`

const OrangeUnderline = styled.div`
    height: ${rem('2px')};  // was 52 px, unified it to 50
    width: ${rem('100px')};
    //border: 1px solid LunaOrange;  //TODO import global style color
    border: 1px solid #E47D31;
`


export const UserAccessTitleWrapper = (props) => {
    return (
        <>
            <UserAccessTitleInnerWrapper>
                <UserAccessTitle>{props.titletext}</UserAccessTitle>
                <OrangeUnderline />
            </UserAccessTitleInnerWrapper>
        </>
    )
}
