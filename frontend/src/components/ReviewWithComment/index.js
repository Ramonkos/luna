import React, {useState} from "react";
import StarRatingComponent from "react-star-rating-component";
import {
    SmallestOrangeButton,
    GreyLeftButton,
    GreyRightButton,
} from "../../../src/style/GlobalButton";
import {UserDetailContainer} from "../../../src/style/GlobalShortUserProfile";
import Avatar from "../../assets/laurent.jpg";
import IconLike from "../../assets/like.png";
import styled from "styled-components";
import {rem} from "polished";
import {connect, useDispatch} from "react-redux";
import {createCommentOnReviewAction, toggleLikeCommentAction} from "../../store/actions/commentAction";
import {getSpecificRestaurantAction} from "../../store/actions/restaurantActions";
import {Link} from "react-router-dom";

// Styling

const ReviewContainer = styled.div`
  width: 650px;
  color: #000000;
`;

const UserRatingWrapper = styled.div`
  height: 68px;
  border-bottom: 1px solid #ebebeb;
  display: flex;
  justify-content: space-between;
  p {
    font-weight: 300;
    font-size: ${rem("14px")};
    line-height: ${rem("16px")};
    padding: 10px;
  }
`;

const LeftUserRatingWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 380px;
`;

const ReviewCommentInputWrapper = styled.div`
  border-bottom: 1px solid #ebebeb;
  padding: 10px;
  align-items: center;
  p {
    text-align: left;
    font-weight: 300;
    font-size: ${rem("16px")};
    line-height: ${rem("18px")};
  }
`;

const CommentsDisplayedWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    color: #e47d31;
    font-weight: normal;
    cursor: pointer;
  }
`;

const InputButtonWrapper = styled.div`
  display: flex;
  input {
    width: 414px;
    margin-right: 10px;
    font-size: ${rem("14px")};
    line-height: ${rem("16px")};
    //color: #d8d8d8 !important;  //commented out by Attila
    color: #979797;   //added by Attila
    border: 1px solid #ebebeb;
    border-radius: 3px;
    padding-left: 10px;
    &:focus {   //added by Attila
      outline: none;
    } 
  }
`;

const CommentsHiddenWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    color: #e47d31;
    font-weight: normal;
    cursor: pointer;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  img {
    width: 17px;
    height: 21px;
    margin-right: 10px;
  }
`;

const CommentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${rem("12px")};
  line-height: ${rem("14px")};
  font-weight: 300;
  color: #000000;
  padding: 10px;
  border-bottom: 1px solid #ebebeb;
`;

const NameCommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: ${rem("14px")};
  line-height: ${rem("16px")};
  a {
    font-weight: bold;
    color: #e47d31;
  }
`;

const StarWrapper = styled.div`
  width: 214px;
  display: flex;
  i {
    font-size: 27px;
  }
  /* margin-left: 20px; */
`;

const ReviewWithComment = ({review, toggleLikeCommentAction, createCommentOnReviewAction, restaurantId}) => {
    const dispatch = useDispatch();

    const [value, setValue] = useState({
        toggle: true,
    });

    const [comment, setComment] = useState('');

    const inputHandler = (e, func) => {
        func(e.currentTarget.value)
    };

    const likeHandler = async e => {
        e.preventDefault();
        const response = await toggleLikeCommentAction(review.id);
        if (response.status === 202) {
            const resetReviewResponse = await dispatch(getSpecificRestaurantAction(restaurantId));
            return resetReviewResponse
        }
    };

    const commentHandler = async e => {
        e.preventDefault();
        const commentData = {text_content: comment}
        const response = await createCommentOnReviewAction(review.id, commentData);
        if (response.status === 201) {
            const resetReviewResponse = await dispatch(getSpecificRestaurantAction(restaurantId));
            return resetReviewResponse
        }
    };

    return (
        <ReviewContainer>
            <UserRatingWrapper>
                <LeftUserRatingWrapper>
                    <UserDetailContainer>
                        <Link to={`/users/${review.author.id}/`}><img src={review.author.avatar ? review.author.avatar : Avatar} alt="profile"/></Link>
                        <div>
                            <Link to={`/users/${review.author.id}/`}><h1>{`${review.author.first_name} ${review.author.last_name.slice(0, 1)}.`}</h1></Link>
                            <h2>{review.author.amount_of_reviews} Reviews in total</h2>
                        </div>
                    </UserDetailContainer>
                    <StarWrapper>
                        <StarRatingComponent
                            name="Restaurant_Rating"
                            starColor={"#F8E71C"}
                            emptyStarColor={"rgba(235, 235, 235, 0.5)"}
                            editing={false}
                            starCount={5}
                            value={review.rating}
                            // value={Math.round(restaurant.review_average)}
                        />
                    </StarWrapper>
                </LeftUserRatingWrapper>
                <p>{review.created.slice(0, 10)}</p>
            </UserRatingWrapper>

            <ReviewCommentInputWrapper>
                <p>
                    {review.text_content}
                </p>
                {value.toggle ? (
                    <CommentsHiddenWrapper>
                        <ButtonWrapper>
                            <GreyLeftButton onClick={likeHandler}>
                                <img src={IconLike} alt="like icon"/>
                                {`Like ${review.amount_of_likes}`}
                            </GreyLeftButton>
                            <GreyRightButton
                                onClick={() => setValue({toggle: !value.toggle})}>{`Comment ${review.amount_of_comments}`}</GreyRightButton>
                        </ButtonWrapper>
                        <p onClick={() => setValue({toggle: !value.toggle})}>
                            View all comments
                        </p>
                    </CommentsHiddenWrapper>
                ) : (
                    <CommentsDisplayedWrapper>
                        <InputButtonWrapper>
                            <input
                                type="text"
                                placeholder="Write comment"
                                value={comment}
                                onChange={e => inputHandler(e, setComment)}
                            />
                            <SmallestOrangeButton onClick={commentHandler}>Post</SmallestOrangeButton>
                        </InputButtonWrapper>
                        <p onClick={() => setValue({toggle: !value.toggle})}>Hide</p>
                    </CommentsDisplayedWrapper>
                )}
            </ReviewCommentInputWrapper>
            {value.toggle ? null : (
                review.comments.map(comment => {
                    return (
                        <CommentWrapper key={`Comment ${comment.id}`}>
                            <NameCommentWrapper>
                                <a>{`${comment.author.first_name} ${comment.author.last_name.slice(0, 1)}.`}</a>
                                <p>{comment.text_content}</p>
                            </NameCommentWrapper>
                            <p>{comment.created.slice(0, 10)}</p>
                        </CommentWrapper>
                    )
                })
            )}
        </ReviewContainer>
    );
};

const mapStateToProps = state => {
    return {}
};

export default connect(mapStateToProps, {toggleLikeCommentAction, createCommentOnReviewAction})(ReviewWithComment);
