import React, {useEffect} from 'react';
import {SearchContainer, Selector, TitleContainer, BestRatedWrapper, CardWrapper, TitleMasterContainer} from "./style";
import {LinkWrapper} from "../SearchUserPage/style";
import {NavLink} from "react-router-dom";
import GenericSpinner from "../GenericSpinner";
import {connect} from "react-redux";
import GenericRestaurantList from "../GenericRestaurantList";
import {allRestaurantsAction} from "../../store/actions/restaurantActions";

const SearchRestaurantPage = ({notEmpty, allRestaurants, allRestaurantsAction}) => {
    const displayMessage = () => !notEmpty ? <GenericSpinner/> : null;

    useEffect(() => {
        allRestaurantsAction();
    }, [allRestaurantsAction]);

    return <>
        <SearchContainer>
            <input type="text" id="search" name="search" placeholder="Search"/>

            <Selector>
                <option required value="">Select a category...</option>
                <option value="1">Burger</option>
                <option value="2">Chinese</option>
                <option value="3">Italian</option>
                <option value="4">Japanese</option>
                <option value="5">Mexican</option>
                <option value="6">Thai</option>
                <option value="7">Indian</option>
                <option value="8">Greek</option>
                <option value="9">Swiss</option>
                <option value="10">Pizza</option>
                <option value="11">Vegetarian</option>
                <option value="12">Other</option>
            </Selector>
        </SearchContainer>
        <TitleMasterContainer>
            <TitleContainer>
                <LinkWrapper>
                    <NavLink to="/search/restaurants/">Restaurants</NavLink>
                </LinkWrapper>
                <LinkWrapper>
                    <NavLink to="/search/reviews/">Reviews</NavLink>
                </LinkWrapper>
                <LinkWrapper>
                    <NavLink to="/search/users/">Users</NavLink>
                </LinkWrapper>
            </TitleContainer>
        </TitleMasterContainer>
        <BestRatedWrapper>
        <CardWrapper>
            {allRestaurants && notEmpty ?
                        <GenericRestaurantList items={allRestaurants} key={'all-restaurants'}/> : displayMessage()};

        </CardWrapper>
        </BestRatedWrapper>

    </>
};

const mapStateToProps = (state) => {
    const notEmpty = state.restaurantReducer.allRestaurants.length;
    return {
        allRestaurants: state.restaurantReducer.allRestaurants,
        notEmpty: notEmpty
    }
};

export default connect(mapStateToProps, {allRestaurantsAction})(SearchRestaurantPage);