import React, {useEffect, useState} from 'react';
import {SearchContainer, Selector, TitleContainer, BestRatedWrapper, CardWrapper, TitleMasterContainer, LinkWrapper} from "./style";
import {NavLink} from "react-router-dom";
import GenericSpinner from "../GenericSpinner";
import {connect} from "react-redux";
import GenericRestaurantList from "../GenericRestaurantList";
import {allRestaurantsAction} from "../../store/actions/restaurantActions";

const SearchRestaurantPage = ({notEmpty, allRestaurants, allRestaurantsAction}) => {
    const displayMessage = () => !notEmpty ? <GenericSpinner/> : null;

    const [categories] = useState([
        {label: 'All', value: 0},
        {label: 'Burger', value: 1},
        {label: 'Chinese', value: 2},
        {label: 'Italian', value: 3},
        {label: 'Japanese', value: 4},
        {label: 'Mexican', value: 5},
        {label: 'Thai', value: 6},
        {label: 'Indian', value: 7},
        {label: 'Greek', value: 8},
        {label: 'Swiss', value: 9},
        {label: 'Pizza', value: 10},
        {label: 'Vegetarian', value: 11},
        {label: 'Other', value: 12},
    ]);

    useEffect(() => {
        allRestaurantsAction();
    }, [allRestaurantsAction]);

    return <>
        <SearchContainer>
            <input type="text" id="search" name="search" placeholder="Search"/>

            <Selector>
                {categories.map(category => {
                    return <option key={category.value} value={category.value}>{category.label}</option>
                })}
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