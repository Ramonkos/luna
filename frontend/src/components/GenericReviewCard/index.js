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


export const GenericReviewCard = () => (
    <ReviewMainContainer>
        <TopBar />
        <UserDetailContainer>
            <img src={defaultUserProfileAvatar} alt="profile picture" />
            <namereviewsContainer>
                <name>
                    Laurent H.
                </name>
                <reviews>
                    6 Reviews in total
                </reviews>
            </namereviewsContainer>
        </UserDetailContainer>
        <RestaurantNameContainer>
            Colinz Bar
        </RestaurantNameContainer>
        <RestaurantReviewContainer>
            Ugh. Don't waste your time. Pizza dough good, thin crust but ingredients so so.
            Side of mixed vegetables very oily and mainly bell...
            <a href="">read more</a>
        </RestaurantReviewContainer>

        <ButtonContainer>
            <GreyButtonPairWrapper>
                <GreyLeftButton>
                    <LikeIcon src={LikeIconImg} alt="LikeIcon"/>
                    Like 45
                </GreyLeftButton>
                <GreyRightButton>
                    Comment 23
                </GreyRightButton>
            </GreyButtonPairWrapper>
        </ButtonContainer>

        <LatestCommentsTitle>
            Latest comments
        </LatestCommentsTitle>

        <CommentsContainer>
            <commentor>
                Colin Wirz
            </commentor>
            <comment>
                Actually you have no taste!
            </comment>
        </CommentsContainer>
                <CommentsContainer>
            <commentor>
                Laurent Meyer
            </commentor>
            <comment>
                Sorry bro!
            </comment>
        </CommentsContainer>

    </ReviewMainContainer>
);