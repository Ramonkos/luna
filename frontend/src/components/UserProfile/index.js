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
import { getUserInformationAction } from "../../store/actions/userInfoAction";
import { useRouteMatch } from "react-router-dom";
import GenericSpinner from "../GenericSpinner";
// import avatar from "../../assets/avatar.svg";
import star from "../../assets/star.svg";
import restaurant from "../../assets/restaurant.svg";
import comment from "../../assets/comment.svg";
import edit from "../../assets/edit.svg";

const ProfileContainer = styled.div`
  width: 100vw;
  //background-color: green; //TODO delete it, just for position checking
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
  //background-color: yellow; //TODO delete it, just for position checking
  display: flex;
  align-items: start;
  margin-top: ${rem("-115px")};
`;

const LeftWrapper = styled.div`
  width: ${rem("234px")};
  //background-color: bisque; //TODO delete it, just for position checking
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
  //background-color: cadetblue; //TODO delete it, just for position checking
  display: flex;
  flex-flow: column;
`;

const RightWrapper = styled.div`
  width: ${rem("314px")};
  //background-color: darkseagreen; //TODO delete it, just for position checking
  display: flex;
  flex-flow: column;
  border-right: 1px solid #ebebeb;
  margin-top: ${rem("137px")};
  margin-left: ${rem("15px")};
`;

const UserDataText = styled.div`
  height: ${rem("115px")};
  //background-color: darkorange; //TODO delete it, just for position checking
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
  //background-color: darkorchid; //TODO delete it, just for position checking
  color: black; //TODO delete it, just for text
  display: flex;
  justify-content: flex-start;
  margin-top: ${rem("24px")};
`;

const UserProfile = ({ getUserInformationAction, targetUser, location }) => {
  const displayMessage = () => (!targetUser ? <GenericSpinner /> : null);

  const initialState = {
    display: "review",
  };

  const match = useRouteMatch();

    useEffect(() => {

        if (location.pathname === '/userprofile/') {
            getUserInformationAction('me')
        } else {
            getUserInformationAction(match.params.userId)
        }
    }, [getUserInformationAction])

  const [value, setValue] = useState(initialState);

  return (
    <ProfileContainer>
      {targetUser ? (
        <>
          <img 
            className="banner"
            src={
              targetUser.banner ? targetUser.banner : defaultUserProfileBanner
            }
          />
          <ProfileContent>
            <LeftWrapper>
              <UserImageBig
                src={
                  targetUser.avatar
                    ? targetUser.avatar
                    : defaultUserProfileAvatar
                }
                alt="User Profile Image"
              />
              <UserProfileText>
                {targetUser.first_name}'s profile
              </UserProfileText>
              <UserProfileButton
                onClick={() => setValue({ display: "review" })}
              >
                <img src={star} />
                Reviews
              </UserProfileButton>
              <UserProfileButton
                onClick={() => setValue({ display: "comment" })}
              >
                <img src={comment} />
                Comments
              </UserProfileButton>
              <UserProfileButton
                onClick={() => setValue({ display: "restaurant" })}
              >
                <img src={restaurant} />
                Restaurants
              </UserProfileButton>
              <UserProfileButton onClick={() => setValue({ display: "edit" })}>
                <img src={edit} />
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
                  {(() => {
                    switch (value.display) {
                      case "review":
                        return <UserProfileReview />;
                      case "comment":
                        return <UserProfileComment />;
                      case "restaurant":
                        return <UserProfileRestaurant />;
                      case "edit":
                        return <UserEditProfile />;
                    }
                  })()}
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
    // const notEmpty = state.userInfoReducer.targetUser.length;
    return {
        targetUser: state.userInfoReducer.targetUser,
        // notEmpty: notEmpty
    };
};

export default connect(mapStateToProps, {getUserInformationAction})(
    UserProfile
);
