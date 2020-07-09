import React, {useEffect} from "react";
import {
  BottomContainer,
  ButtonContainer,
  CommentContainer,
  ContactContainer,
  ContactDetailsContainer,
  FilterButtonContainer,
  IconContainer,
  MapContactContainer,
  MapContainer,
  MiddleContainer,
  OpeningHoursContainer,
  PriceContainer,
  PriceLevel,
  PriceReviewEditContainer,
  RestaurantContainer,
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

const RestaurantPage = ({targetRestaurant, getSpecificRestaurantAction}) => {

   const match = useRouteMatch();

  useEffect(() => {
    // console.log(match.params.restaurantId);
    getSpecificRestaurantAction(match.params.restaurantId)
  }, [getSpecificRestaurantAction])

  return (
    <>
      <RestaurantContainer>
        <darkbackground />
        <restaurantname>Läderach Chocolatier Suisse</restaurantname>
        <restaurantdescription>Chocolatiers & Shops</restaurantdescription>
        <StarsReviewContainer>
          <StarRatingComponent
            name="Restaurant_Rating"
            starColor={"#F8E71C"}
            emptyStarColor={"rgba(235, 235, 235, 0.5)"}
            starDimension={"30px"}
            editing={false}
            starCount={5}
            value={3}
            // value={Math.round(restaurant.review_average)}
          />
          <p>27 reviews</p>
        </StarsReviewContainer>

        <MapContactContainer>
          <MapContainer>
            <img
              src="data:image/jpeg;base64,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"
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
              <p>Bahnhofstrasse 106</p>
              <p>+41 44 211 53 72</p>
              <p>laederach.com</p>
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
          <icon>
            <img src={Clock} alt="Clock Logo" />
          </icon>
          <Time>Monday-Friday 9:00 am - 8:00 pm</Time>
        </OpeningHoursContainer>
      </MiddleContainer>

      <BottomContainer>
        <CommentContainer>
          <ReviewWithComment></ReviewWithComment>
        </CommentContainer>
        <RightBottomContainer>
          <PriceReviewEditContainer>
            <PriceContainer>
              <icon>
                <img src={Money} alt="Money Logo" />
              </icon>
              <PriceLevel>Price level: $$$</PriceLevel>
            </PriceContainer>
            <ButtonContainer>
              <LongOrangeButton>WRITE A REVIEW</LongOrangeButton>
              <LongOrangeButton>EDIT DATA</LongOrangeButton>
            </ButtonContainer>
          </PriceReviewEditContainer>
        </RightBottomContainer>
      </BottomContainer>
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
