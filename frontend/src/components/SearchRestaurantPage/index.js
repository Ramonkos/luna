import React, {useState} from 'react';
import {
    SearchContainer,
    Selector,
    TitleContainer,
    BestRatedWrapper,
    CardWrapper,
    TitleMasterContainer,
    LinkWrapper
} from "./style";
import {NavLink} from "react-router-dom";
import GenericSpinner from "../GenericSpinner";
import {connect} from "react-redux";
import GenericRestaurantList from "../GenericRestaurantList";
import {
    searchAllRestaurantsAction,
    searchRestaurantsByCategoryAction
} from "../../store/actions/restaurantActions";

// Component

const SearchRestaurantPage = ({notEmpty, restaurants, searchAllRestaurantsAction, searchRestaurantsByCategoryAction}) => {
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

    const [search, setSearch] = useState('');

    let selectorCounter = 0;

    const inputHandler = (e, func) => {
        func(e.currentTarget.value)
    };

    const keyPressHandler = async e => {
        if (e.key === "Enter") {
            const search_location = '&search_location=restaurants';
            const search_fields = '&search_fields=name&search_fields=city';
            const search_string = `?search=${search}`;
            const response = await searchAllRestaurantsAction(search_string + search_fields + search_location);
            return response
        }
    };

    const selectHandler = async e => {
        selectorCounter++;
        if (selectorCounter % 2 === 0) {
            const response = await searchRestaurantsByCategoryAction(e.target.value)
            return response
        }
    };

    return <>
        <SearchContainer>
            <input type="text"
                   name="search"
                   placeholder="Search for restaurant's by name or by city...."
                   value={search}
                   onChange={e => inputHandler(e, setSearch)}
                   onKeyPress={keyPressHandler}
            />
            <Selector onClick={selectHandler}>
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
                {restaurants && notEmpty ?
                    <GenericRestaurantList items={restaurants} key={'restaurants'}/> : displayMessage()}
            </CardWrapper>
        </BestRatedWrapper>
    </>
};

const mapStateToProps = (state) => {
    const notEmpty = state.restaurantReducer.restaurants.length;
    return {
        restaurants: state.restaurantReducer.restaurants,
        notEmpty: notEmpty
    }
};

export default connect(mapStateToProps, {
    searchAllRestaurantsAction,
    searchRestaurantsByCategoryAction
})(SearchRestaurantPage);