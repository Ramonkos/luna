import styled from "styled-components";
import { rem } from "polished";
import React from "react";
import {defaultUserProfileAvatar, defaultUserProfileBanner, defaultUserProfileButtonIcon} from "../../constants";
import {UserProfileButton} from "../../style/GlobalButton";
import {BlackBold20Left, BlackLight20Left, GreyBold20LeftUppercase} from "../../style/GlobalTitles";

const ProfileContainer = styled.div`
    width: 100vw;
    //background-color: green; //TODO delete it, just for position checking
    display: flex;
    flex-flow: column;
    justify-content: start;
    align-items: center;
`
const ProfileContent = styled.div`
    width: ${rem('1176px')};
    //background-color: yellow; //TODO delete it, just for position checking
    display: flex;
    align-items: start;
    margin-top: ${rem('-115px')};
`

const LeftWrapper = styled.div`
    width: ${rem('234px')};
    //background-color: bisque; //TODO delete it, just for position checking
    display: flex;
    flex-flow: column;
    border-right: 1px solid #EBEBEB;
`

const UserImageBig = styled.img`
    border: 2px solid red; //TODO delete it, just for position checking
`


const UserProfileText = styled.div`
    width: ${rem('233px')};
    height: ${rem('65px')};
    margin-bottom: ${rem('5px')};
    display: flex;
    flex-flow: column;
    justify-content: center;
    text-align: left;
    font-size: ${rem('18px')};
    font-weight: bold;
    color: #4C4C4C;    
`

const MiddleWrapper = styled.div`
    width: ${rem('619px')};
    //background-color: cadetblue; //TODO delete it, just for position checking
    display: flex;
    flex-flow: column;
`

const RightWrapper = styled.div`
    width: ${rem('314px')};
    //background-color: darkseagreen; //TODO delete it, just for position checking
    display: flex;
    flex-flow: column;
    border-right: 1px solid #EBEBEB;
    margin-top: ${rem('137px')};
    margin-left: ${rem('15px')};
`

const UserDataText = styled.div`
    height: ${rem('115px')};
    //background-color: darkorange; //TODO delete it, just for position checking
    display: flex;
    flex-flow: column;
    margin-left: ${rem('16px')};
`

const UserDataName = styled.div`
    font-size: ${rem('24px')};
    color: white;
    font-weight: bold;
    text-align: left;
`

const UserDataInfo = styled(UserDataName)`
    font-size: ${rem('18px')};
    font-weight: lighter;
    margin-top: ${rem('8px')};
`

const ContentToButtons = styled.div`
    //background-color: darkorchid; //TODO delete it, just for position checking
    color: black; //TODO delete it, just for text
    display: flex;
    justify-content: flex-start;
    margin-top: ${rem('24px')};
`


export const UserProfile = () => {
    return (
    <ProfileContainer>
        <img src={defaultUserProfileBanner}/>
        <ProfileContent>
            <LeftWrapper>
                <UserImageBig src={defaultUserProfileAvatar} alt="User Profile Image" />
                <UserProfileText>Laurent's profile</UserProfileText>
                <UserProfileButton><img src={defaultUserProfileButtonIcon}/>Reviews</UserProfileButton>
                <UserProfileButton><img src={defaultUserProfileButtonIcon}/>Comments</UserProfileButton>
                <UserProfileButton><img src={defaultUserProfileButtonIcon}/>Restaurants</UserProfileButton>
                <UserProfileButton><img src={defaultUserProfileButtonIcon}/>Edit profile</UserProfileButton>
            </LeftWrapper>
            <MiddleWrapper>
                <UserDataText>
                    <UserDataName>Laurent H.</UserDataName>
                    <UserDataInfo>Zürich, CH</UserDataInfo>
                    <UserDataInfo>6 reviews</UserDataInfo>
                    <UserDataInfo>210 comments</UserDataInfo>
                    <ContentToButtons>Whatever content when we click on the side buttons, just put it here</ContentToButtons>
                </UserDataText>
            </MiddleWrapper>
            <RightWrapper>
                <GreyBold20LeftUppercase>about laurent</GreyBold20LeftUppercase>
                <BlackBold20Left>Location</BlackBold20Left>
                <BlackLight20Left>Zürich. CH</BlackLight20Left>
                <BlackBold20Left>Luna ember since</BlackBold20Left>
                <BlackLight20Left>April, 2018</BlackLight20Left>
                <BlackBold20Left>Things I love</BlackBold20Left>
                <BlackLight20Left>Everything</BlackLight20Left>
                <BlackBold20Left>Description</BlackBold20Left>
                <BlackLight20Left>Im professional photographer with an eye for details in every thing I do in my live. Every time a pass by a nice restaurant i have to stop and take notes</BlackLight20Left>
            </RightWrapper>
        </ProfileContent>
    </ProfileContainer>
)
}