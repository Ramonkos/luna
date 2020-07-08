import React from 'react';
import {defaultUserProfileAvatar} from '../../constants';
import {
    ReviewMainContainer,
    TopBar,
    RestaurantNameContainer,
    RestaurantReviewContainer,
    ButtonContainer,
    CommentsContainer,
    LatestCommentsTitle
} from "./style";
import {GreyButtonPairWrapper, GreyLeftButton, GreyRightButton, LikeIcon} from "../../style/GlobalButton";
import {UserDetailContainer} from "../../style/GlobalShortUserProfile";
import LikeIconImg from "../../assets/like.png"


export const GenericReviewCard = ({item}) => (
    <ReviewMainContainer>
        <TopBar/>
        <UserDetailContainer>
            <img src={defaultUserProfileAvatar} alt="profile picture"/>
            <namereviewsContainer>
                <name>
                    {`${item.author.first_name} ${item.author.last_name}`}
                </name>
                <reviews>
                    6 Reviews in total
                </reviews>
            </namereviewsContainer>
        </UserDetailContainer>
        <RestaurantNameContainer>
            {item.restaurant_review_about.name.length > 20 ? `${item.restaurant_review_about.name.slice(0, 20)}...` : item.restaurant_review_about.name}
        </RestaurantNameContainer>
        <RestaurantReviewContainer>
            {item.text_content}
            {/*<a href="">read more</a>*/}
        </RestaurantReviewContainer>

        <ButtonContainer>
            <GreyButtonPairWrapper>
                <GreyLeftButton>
                    <LikeIcon src={LikeIconImg} alt="LikeIcon"/>
                    {`Like ${item.amount_of_likes}`}
                </GreyLeftButton>
                <GreyRightButton>
                    {`Comment ${item.amount_of_comments}`}
                </GreyRightButton>
            </GreyButtonPairWrapper>
        </ButtonContainer>

        <LatestCommentsTitle>
            Latest comments
        </LatestCommentsTitle>

        {item.comments ? item.comments.slice(0,3).map(comment => {
            return (<CommentsContainer>
            <h1>
                {`${comment.author.first_name} ${comment.author.last_name}`}
            </h1>
            <h2>
                {comment.text_content}
            </h2>
        </CommentsContainer>)
        }) : null}


    </ReviewMainContainer>
);