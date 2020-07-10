import React, {useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import {
    ErrorButtonContainer,
    RatingContainer,
    RestaurantContainer,
    SelectRatingContainer,
    StarsReviewContainer,
    ButtonContainer, Restaurantname,
    Darkbackground, Restaurantdescription, ReviewMainContainer
} from "./style";
import {Button} from "../../style/GlobalButton";
import StarRatingComponent from "react-star-rating-component";
import {getSpecificRestaurantAction} from "../../store/actions/restaurantActions";
import {connect} from "react-redux";
import {useRouteMatch} from 'react-router-dom';
import GenericSpinner from "../GenericSpinner";
import {createReviewAction} from "../../store/actions/reviewActions";


const WriteReviewPage = ({getSpecificRestaurantAction, targetRestaurant, createReviewAction}) => {

    //   constructor() {
    //       super();
    //
    //       this.state = {
    //         rating: 0,
    //       };
    // }

    const displayMessage = () => !targetRestaurant ? <GenericSpinner/> : null;

    const match = useRouteMatch();

    const history = useHistory()

    useEffect(() => {
        getSpecificRestaurantAction(match.params.restaurantId)
    }, [getSpecificRestaurantAction])

    const [value, setValue] = useState('')
    const [rating, setRating] = useState({
        rating: 3
    })


    const onStarClick = (nextValue, prevValue, name) => {
        setRating({rating: nextValue});
        console.log(nextValue)
    }

    const changeHandler = (e) => {
        setValue(e.target.value)
    }

    const starChangeHandler = ((nextValue, prevValue, name) => {
        setRating(nextValue)
    })

    const submitHandler = async (e) => {
        const reviewData = {
            text_content: value,
            rating: rating
        }
        const response = await createReviewAction(reviewData, targetRestaurant.id)
        console.log(history)
        if (response.status < 400) {
            history.push(`restaurants/${targetRestaurant.id}`)
        }

    }

    return (
        <>
            {targetRestaurant ?
                <ReviewMainContainer>
                    <div>


                        <RestaurantContainer>
                            <img src={targetRestaurant.restaurant_image} alt="https://via.placeholder.com/1440x496"/>
                            <Darkbackground/>
                            <Restaurantname>{targetRestaurant.name}</Restaurantname>
                            {(() => {
                                switch (targetRestaurant.category) {
                                    case 1:
                                        return <Restaurantdescription>Burger</Restaurantdescription>;
                                    case 2:
                                        return <Restaurantdescription>Chinese</Restaurantdescription>;
                                    case 3:
                                        return <Restaurantdescription>Italian</Restaurantdescription>;
                                    case 4:
                                        return <Restaurantdescription>Japanese</Restaurantdescription>;
                                    case 5:
                                        return <Restaurantdescription>Mexican</Restaurantdescription>;
                                    case 6:
                                        return <Restaurantdescription>Thai</Restaurantdescription>;
                                    case 7:
                                        return <Restaurantdescription>Indian</Restaurantdescription>;
                                    case 8:
                                        return <Restaurantdescription>Greek</Restaurantdescription>;
                                    case 9:
                                        return <Restaurantdescription>Swiss</Restaurantdescription>;
                                    case 10:
                                        return <Restaurantdescription>Pizza</Restaurantdescription>;
                                    case 11:
                                        return <Restaurantdescription>Vegetarian</Restaurantdescription>;
                                    default:
                                        return <Restaurantdescription>Other</Restaurantdescription>;
                                }
                            })()}
                            <StarsReviewContainer>
                                <StarRatingComponent
                                    name="Restaurant_Rating"
                                    starColor={"#F8E71C"}
                                    emptyStarColor={"rgba(235, 235, 235, 0.5)"}
                                    starDimension={"30px"}
                                    editing={false}
                                    starCount={5}
                                    value={targetRestaurant.review_average}
                                />
                                <p>{targetRestaurant.restaurant_reviews.length} reviews</p>
                            </StarsReviewContainer>
                        </RestaurantContainer>

                        <RatingContainer>
                            <SelectRatingContainer>
                                <StarRatingComponent
                                    name="Restaurant_Rating"
                                    starColor={"#F8E71C"}
                                    emptyStarColor={"#F0F0F0"}
                                    starCount={5}
                                    value={rating}
                                    onStarClick={starChangeHandler.bind(this)}
                                />
                                <p>Select your rating</p>
                            </SelectRatingContainer>

                            <textarea
                                id="review"
                                name="review"
                                placeholder=" Your review helps others learn about great businesses.
                           .
                           Please do not review this business if you received a freebie for writing this review,
                           or if you are connected in any way to the owner or employees."
                                value={value}
                                onChange={changeHandler}


                            />

                            <ErrorButtonContainer>
                                <errormessage>Placeholder ErrorMessage</errormessage>
                                <ButtonContainer>
                                    <Button onClick={submitHandler}>Submit</Button>
                                </ButtonContainer>
                            </ErrorButtonContainer>
                        </RatingContainer>
                    </div>
                </ReviewMainContainer> : displayMessage()}
        </>
    );
};


const mapStateToProps = state => {
    return {
        targetRestaurant: state.restaurantReducer.targetRestaurant
    }
};

export default connect(mapStateToProps, {getSpecificRestaurantAction, createReviewAction})(WriteReviewPage);

// export default WriteReviewPage;

//TODO try to enter empty row in textarea
//TODO add error message if input field is empty
