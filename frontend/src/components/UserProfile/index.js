import styled from "styled-components";
import {rem} from "polished";
import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {
    defaultUserProfileAvatar,
    defaultUserProfileBanner,
    defaultUserProfileButtonIcon,
} from "../../constants";
import {UserProfileButton} from "../../style/GlobalButton";
import {
    BlackBold20Left,
    BlackLight20Left,
    GreyBold20LeftUppercase,
} from "../../style/GlobalTitles";
import UserProfileReview from "../UserProfileReview";
import UserProfileComment from "../UserProfileComment";
import UserProfileRestaurant from "../UserProfileRestaurant";
import UserEditProfile from "../UserEditProfile";
import {getUserInformationAction} from "../../store/actions/userInfoAction";
import {useRouteMatch} from "react-router-dom";
import GenericSpinner from "../GenericSpinner";

//Styling

const ProfileContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-flow: column;
  justify-content: start;
  align-items: center;

  img.banner {
    width: 1440px;
    height: 155px;
  }
`;

const ProfileContent = styled.div`
  width: ${rem("1176px")};
  display: flex;
  align-items: start;
  margin-top: ${rem("-115px")};
`;

const LeftWrapper = styled.div`
  width: ${rem("234px")};
  display: flex;
  flex-flow: column;
  border-right: 1px solid #ebebeb;
`;

const UserImageBig = styled.img`
  width: 234px;
  height: 232px;
`;

const UserProfileText = styled.div`
  width: ${rem("233px")};
  height: ${rem("65px")};
  margin-bottom: ${rem("5px")};
  display: flex;
  flex-flow: column;
  justify-content: center;
  text-align: left;
  font-size: ${rem("18px")};
  font-weight: bold;
  color: #4c4c4c;
`;

const MiddleWrapper = styled.div`
  width: ${rem("619px")};
  display: flex;
  flex-flow: column;
`;

const RightWrapper = styled.div`
  width: ${rem("314px")};
  display: flex;
  flex-flow: column;
  border-right: 1px solid #ebebeb;
  margin-top: ${rem("137px")};
  margin-left: ${rem("15px")};
`;

const UserDataText = styled.div`
  height: ${rem("115px")};
  display: flex;
  flex-flow: column;
  margin-left: ${rem("16px")};
`;

const UserDataName = styled.div`
  font-size: ${rem("24px")};
  color: white;
  font-weight: bold;
  text-align: left;
`;

const UserDataInfo = styled(UserDataName)`
  font-size: ${rem("18px")};
  font-weight: lighter;
  margin-top: ${rem("8px")};
`;

const ContentToButtons = styled.div`
  color: black; //TODO delete it, just for text
  display: flex;
  justify-content: flex-start;
  margin-top: ${rem("24px")};
`;

// Component

const UserProfile = ({getUserInformationAction, targetUser, location}) => {
    const displayMessage = () => (!targetUser ? <GenericSpinner/> : null);

    const [value, setValue] = useState({
        display: "review"
    });

    const match = useRouteMatch();

    useEffect(() => {

        if (location.pathname === '/userprofile/') {
            getUserInformationAction('me')
        } else {
            getUserInformationAction(match.params.userId)
        }
    }, [getUserInformationAction, location.pathname, match.params.userId])

    return (
        <ProfileContainer>
            {targetUser ? (
                <>
                    <img
                        className="banner"
                        src={targetUser.banner ? targetUser.banner : defaultUserProfileBanner}
                        alt='banner'
                    />
                    <ProfileContent>
                        <LeftWrapper>
                            <UserImageBig
                                src={targetUser.avatar ? targetUser.avatar : defaultUserProfileAvatar}
                                alt="user"
                            />
                            <UserProfileText>
                                {targetUser.first_name}'s profile
                            </UserProfileText>
                            <UserProfileButton
                                onClick={() => setValue({display: "review"})}
                            >
                                <img src={defaultUserProfileButtonIcon} alt='reviews button'/>
                                Reviews
                            </UserProfileButton>
                            <UserProfileButton
                                onClick={() => setValue({display: "comment"})}
                            >
                                <img src={defaultUserProfileButtonIcon} alt='comment button'/>
                                Comments
                            </UserProfileButton>
                            <UserProfileButton
                                onClick={() => setValue({display: "restaurant"})}
                            >
                                <img src={defaultUserProfileButtonIcon} alt='restaurant button'/>
                                Restaurants
                            </UserProfileButton>
                            <UserProfileButton onClick={() => setValue({display: "edit"})}>
                                <img src={defaultUserProfileButtonIcon} alt='edit profile button'/>
                                Edit profile
                            </UserProfileButton>
                        </LeftWrapper>
                        <MiddleWrapper>
                            <UserDataText>
                                <UserDataName>
                                    {targetUser.first_name} {targetUser.last_name[0] + "."}
                                </UserDataName>
                                <UserDataInfo>{targetUser.loacation}</UserDataInfo>
                                <UserDataInfo>
                                    {targetUser.amount_of_reviews} reviews
                                </UserDataInfo>
                                <UserDataInfo>
                                    {targetUser.amount_of_comments} comments
                                </UserDataInfo>
                                <ContentToButtons>
                                    {value.display === 'edit' ? <UserEditProfile/> : value.display === 'comment' ?
                                        <UserProfileComment/> : value.display === 'restaurant' ?
                                            <UserProfileRestaurant/> : <UserProfileReview/>}
                                </ContentToButtons>
                            </UserDataText>
                        </MiddleWrapper>
                        <RightWrapper>
                            <GreyBold20LeftUppercase>
                                about {targetUser.first_name}
                            </GreyBold20LeftUppercase>
                            <BlackBold20Left>Location</BlackBold20Left>
                            <BlackLight20Left>{targetUser.location}</BlackLight20Left>
                            <BlackBold20Left>Luna member since</BlackBold20Left>
                            <BlackLight20Left>
                                {targetUser.date_joined.slice(0, 10)}
                            </BlackLight20Left>
                            <BlackBold20Left>Things I love</BlackBold20Left>
                            <BlackLight20Left>
                                {targetUser.things_user_loves}
                            </BlackLight20Left>
                            <BlackBold20Left>Description</BlackBold20Left>
                            <BlackLight20Left>{targetUser.description}</BlackLight20Left>
                        </RightWrapper>
                    </ProfileContent>
                </>
            ) : (
                displayMessage()
            )}
        </ProfileContainer>
    );
};

const mapStateToProps = (state) => {
    return {
        targetUser: state.userInfoReducer.targetUser,
    };
};

export default connect(mapStateToProps, {getUserInformationAction})(UserProfile);