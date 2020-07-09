import React, {useEffect, useState} from "react";
import {Button} from "../../../src/style/GlobalButton";
import styled from "styled-components";
import {rem} from "polished";
import AsianFood from "../../assets/hero-image-restaurant.jpg";
import {UserAccessTitleWrapper} from "../../../src/style/GlobalWrappers";
import GenericSpinner from "../GenericSpinner";
import {searchAllRestaurantsAction, top4RestaurantsAction} from "../../store/actions/restaurantActions";
import {connect} from "react-redux";
import GenericRestaurantList from "../GenericRestaurantList";

const LandingPageContainer = styled.div`
  align-self: flex-start;
`;

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

const LandingPage = ({top4Restaurants, top4RestaurantsAction, notEmpty, searchAllRestaurantsAction, history}) => {

    const [search, setSearch] = useState('');

    const inputHandler = (e, func) => {
        func(e.currentTarget.value)
    };

    useEffect(() => {
        top4RestaurantsAction();
    }, [top4RestaurantsAction]);

    const displayMessage = () => !notEmpty ? <GenericSpinner/> : null;

    const submitHandler = async e => {
        e.preventDefault();
        const search_location = '&search_location=restaurants';
        const search_fields = '&search_fields=name&search_fields=city';
        const search_string = `?search=${search}`;
        const response = await searchAllRestaurantsAction(search_string + search_fields + search_location);
        if (response.status === 200) {
            history.push('/search/restaurants/');
        }
    };

    return (
        <LandingPageContainer>
            <HomeHeroWrapper>
                <InputWrapper>
                    <input type="text"
                           name="search"
                           placeholder="Search Restaurants by name or location...."
                           value={search}
                           onChange={e => inputHandler(e, setSearch)}
                    />
                </InputWrapper>
                <Button onClick={submitHandler}>Search</Button>
            </HomeHeroWrapper>
            <UserAccessTitleWrapper titletext="Best Rated Restaurants"/>
            <BestRatedWrapper>
                <CardWrapper>
                    {top4Restaurants && notEmpty ?
                        <GenericRestaurantList items={top4Restaurants} key={'top-4-restaurants'}/> : displayMessage()};
                </CardWrapper>
            </BestRatedWrapper>
        </LandingPageContainer>
    );
};

const mapStateToProps = (state) => {
    const notEmpty = state.restaurantReducer.top4Restaurants.length;
    return {
        top4Restaurants: state.restaurantReducer.top4Restaurants,
        notEmpty: notEmpty
    }
};

export default connect(mapStateToProps, {top4RestaurantsAction, searchAllRestaurantsAction})(LandingPage)
