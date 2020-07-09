import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {Button} from "../../../src/style/GlobalButton";
import styled from "styled-components";
import {rem} from "polished";
import AsianFood from "../../assets/hero-image-restaurant.jpg";
import {UserAccessTitleWrapper} from "../../../src/style/GlobalWrappers";
import GenericSpinner from "../GenericSpinner";
import {top4RestaurantsAction} from "../../store/actions/restaurantActions";
import {connect} from "react-redux";
import GenericRestaurantList from "../GenericRestaurantList";



const HomeHeroWrapper = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${AsianFood});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-bottom: 30px;
`;

const InputWrapper = styled.div`
  input {
    width: 530px;
    height: 55px;
    font-size: ${rem("20px")};
    line-height: ${rem("20px")};
    line-height: 20px;
    color: #4c4c4c;
    padding-left: 20px;
    border-radius: 3px;
    border: none;
    margin-right: 26px;
  }
`;

const BestRatedWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 44px;
`;

const CardWrapper = styled.div`
  width: 1170px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LandingPage = ({top4Restaurants, top4RestaurantsAction, notEmpty}) => {

    useEffect(() => {
        top4RestaurantsAction();
    }, [top4RestaurantsAction]);

    const displayMessage = () => !notEmpty ? <GenericSpinner/> : null;

    return (
        <>
            <HomeHeroWrapper>
                <InputWrapper>
                    <input type="text" placeholder="Search..."/>
                </InputWrapper>
                <Button>Search</Button>
            </HomeHeroWrapper>
            <UserAccessTitleWrapper titletext="Best Rated Restaurants"/>
            <BestRatedWrapper>
                <CardWrapper>
                    {top4Restaurants && notEmpty ?
                        <GenericRestaurantList items={top4Restaurants} key={'top-4-restaurants'}/> : displayMessage()};
                </CardWrapper>
            </BestRatedWrapper>
        </>
    );
};

const mapStateToProps = (state) => {
    const notEmpty = state.restaurantReducer.top4Restaurants.length;
    return {
        top4Restaurants: state.restaurantReducer.top4Restaurants,
        notEmpty: notEmpty
    }
};

export default connect(mapStateToProps, {top4RestaurantsAction})(LandingPage)
