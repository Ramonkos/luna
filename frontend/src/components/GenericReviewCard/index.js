import React from 'react';
import {defaultUserProfileAvatar} from '../../constants';
import {
    ReviewMainContainer,
    TopBar,
    RestaurantNameContainer,
    RestaurantReviewContainer,
    ButtonContainer,
    CommentsContainer,
    LatestCommentsTitle, Line
} from "./style";
import {GreyButtonPairWrapper, GreyLeftButton, GreyRightButton, LikeIcon} from "../../style/GlobalButton";
import {UserDetailContainer} from "../../style/GlobalShortUserProfile";
import LikeIconImg from "../../assets/like.png"
import {Link} from "react-router-dom";


export const GenericReviewCard = ({item}) => (
    <ReviewMainContainer>
        <TopBar/>
        <UserDetailContainer>
            <img src={item.author.avatar} alt="profile picture"/>
            <div>
                <Link to={`/users/${item.author.id}/`}>
                    <h1>
                        {`${item.author.first_name} ${item.author.last_name}`}
                    </h1>
                </Link>
                <h2>
                    {`${item.author.amount_of_reviews} Reviews in total`}
                </h2>
            </div>
        </UserDetailContainer>

        <Line/>

        <Link to={`/restaurants/${item.restaurant_review_about.id}/`}>
            <RestaurantNameContainer>
                {item.restaurant_review_about.name.length > 20 ? `${item.restaurant_review_about.name.slice(0, 20)}...` : item.restaurant_review_about.name}
            </RestaurantNameContainer>
        </Link>
        <RestaurantReviewContainer>
            {item.text_content.length > 146 ? (
                <>
                    <>
                        {item.text_content.slice(0, 147)}
                    </>
                    <>
                        ...
                    </>
                    <Link to={`/restaurants/${item.restaurant_review_about.id}/`}> read more </Link>
                </>) :
                <p>{item.text_content}</p>}
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
            <Link to={`/users/${comment.author.id}/`}>
                <h1>
                {`${comment.author.first_name} ${comment.author.last_name}`}
                </h1>
            </Link>
            <h2>
                {comment.text_content}
            </h2>
        </CommentsContainer>)
        }) : null}


    </ReviewMainContainer>
);