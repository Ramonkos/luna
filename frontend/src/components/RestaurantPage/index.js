import React, {useEffect, useState} from "react";
import {
  BottomContainer,
  ButtonContainer,
  CommentContainer,
  ContactContainer,
  ContactDetailsContainer, Darkbackground,
  FilterButtonContainer, Icon,
  IconContainer, IconPrice,
  MapContactContainer,
  MapContainer,
  MiddleContainer,
  OpeningHoursContainer,
  PriceContainer,
  PriceLevel,
  PriceReviewEditContainer,
  RestaurantContainer, Restaurantdescription, Restaurantname,
  RightBottomContainer,
  SearchFilterContainer,
  Stars,
  StarsReviewContainer,
  Time,
} from "./style";
import Web from "../../assets/web.svg";
import Phone from "../../assets/phone.svg";
import Clock from "../../assets/clock.svg";
import Money from "../../assets/money.svg";
import Pin from "../../assets/pin.svg";
import {
  Button,
  LongOrangeButton,
  SmallOrangeButton,
} from "../../style/GlobalButton";
import ReviewWithComment from "../ReviewWithComment";
import StarRatingComponent from "react-star-rating-component";
import {getSpecificRestaurantAction} from "../../store/actions/restaurantActions";
import {connect} from "react-redux";
import { useRouteMatch } from 'react-router-dom';
import GenericSpinner from "../GenericSpinner";


const RestaurantPage = ({getSpecificRestaurantAction, targetRestaurant, history}) => {

  const displayMessage = () => !targetRestaurant ? <GenericSpinner/> : null;

  const initialState = {
    display: "review",
  };

  const match = useRouteMatch();


  useEffect(() => {
      getSpecificRestaurantAction(match.params.restaurantId)
  }, [getSpecificRestaurantAction])

  const [value, setValue] = useState(initialState)


  return (
    <>
      {targetRestaurant ?
          <>
            <RestaurantContainer>
              <img src={targetRestaurant.restaurant_image} alt="https://via.placeholder.com/1440x496"/>
              <Darkbackground />
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

              <MapContactContainer>
                <MapContainer>
                  <img
                      src="https://images.squarespace-cdn.com/content/v1/5a30f2b3f9a61e096271d9fd/1517234067603-0J1YATJDM1DN273OGB11/ke17ZwdGBToddI8pDm48kOypHelj2N-66W5FaAehoTsUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dlqsvmUpSyP0YKzy_6YMYf0DF1GrsRFOiulVY8PHr8SvG6v6ULRah83RgHXAWD5lbQ/Hera+Z%C3%BCrich+Google+Maps"
                      alt="Placeholder"
                  />
                </MapContainer>

                <ContactContainer>
                  <IconContainer>
                    <img src={Pin} alt="Pin Logo" />
                    <img src={Phone} alt="Phone Logo" />
                    <img src={Web} alt="Web Logo" />
                  </IconContainer>
                  <ContactDetailsContainer>
                    <p>{targetRestaurant.city}, {targetRestaurant.country}</p>
                    {targetRestaurant.phone ? <p>{targetRestaurant.phone}</p> : <p>n/a</p>}
                    {targetRestaurant.website ? <p>{targetRestaurant.website}</p> : <p>n/a</p>}
                  </ContactDetailsContainer>
                </ContactContainer>
              </MapContactContainer>
            </RestaurantContainer>
            <MiddleContainer>
              <SearchFilterContainer>
                <input id="review" name="review" placeholder="Filter list..." />
                <FilterButtonContainer>
                  <SmallOrangeButton>FILTER</SmallOrangeButton>
                </FilterButtonContainer>
              </SearchFilterContainer>
              <OpeningHoursContainer>
                <Icon>
                  <img src={Clock} alt="Clock Logo" />
                </Icon>
                <Time>{targetRestaurant.opening_hours}</Time>
              </OpeningHoursContainer>
            </MiddleContainer>

            <BottomContainer>
              <CommentContainer>
                <ReviewWithComment></ReviewWithComment>
              </CommentContainer>
              <RightBottomContainer>
                <PriceReviewEditContainer>
                  <PriceContainer>
                    <IconPrice>
                      <img src={Money} alt="Money Logo" />
                    </IconPrice>
                    {(() => {
                    switch (targetRestaurant.price_level) {
                      case 1:
                            return <PriceLevel>Price level: $</PriceLevel>;
                      case 2:
                            return <PriceLevel>Price level: $$</PriceLevel>;
                      case 3:
                            return <PriceLevel>Price level: $$$</PriceLevel>;
                      case 4:
                            return <PriceLevel>Price level: $$$$</PriceLevel>;
                      default:
                            return <PriceLevel>Price level: $$$$$</PriceLevel>
                    }
                  })()}
                  </PriceContainer>
                  <ButtonContainer>
                    <LongOrangeButton onClick={() => {history.push(`/createreview/${targetRestaurant.id}/`)}}>WRITE A REVIEW</LongOrangeButton>
                    {targetRestaurant.logged_in_user_is_restaurant_owner ? <LongOrangeButton>EDIT DATA</LongOrangeButton> : null }
                  </ButtonContainer>
                </PriceReviewEditContainer>
              </RightBottomContainer>
            </BottomContainer>
          </> : displayMessage()}
    </>
  );
};

const mapStateToProps = state => {
  return {
    targetRestaurant: state.restaurantReducer.targetRestaurant
  }
};

export default connect(mapStateToProps, {getSpecificRestaurantAction})(RestaurantPage);

//TODO: add map functionality
