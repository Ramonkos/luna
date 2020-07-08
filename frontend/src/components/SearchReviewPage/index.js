import React, {useEffect, useState} from 'react';
import {SearchContainer, Selector, TitleContainer, BestRatedWrapper, CardWrapper, TitleMasterContainer} from "./style";
import {LinkWrapper} from "../SearchUserPage/style";
import {NavLink} from "react-router-dom";
import GenericSpinner from "../GenericSpinner";
import GenericReviewList from "../GenericReviewList";
import {connect} from "react-redux";
import {searchAllReviewsAction} from "../../store/actions/reviewActions";
import {loginAction} from "../../store/actions/loginAction";

const SearchReviewPage = ({notEmpty, searchReviewResults, searchAllReviewsAction}) => {
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

    const inputHandler = (e, func) => {
        func(e.currentTarget.value)
    };

    const keyPressHandler = async e => {
        if (e.key === "Enter") {
            const search_location = '&search_location=reviews';
            const search_fields = '&search_fields=restaurant_review_about__name';
            const search_string = `?search=${search}`;
            const response = await searchAllReviewsAction(search_string + search_fields + search_location);
        }
    };


    return <>
        <SearchContainer>
            <input
                type="text"
                name="search"
                placeholder="Search for reviews by restaurant's name...."
                value={search}
                onChange={e => inputHandler(e, setSearch)}
                onKeyPress={keyPressHandler}
                // onSubmit={submitHandler}
            />
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
                {searchReviewResults && notEmpty ?
                    <GenericReviewList items={searchReviewResults} key={'search-review-results'}/> : displayMessage()}
            </CardWrapper>
        </BestRatedWrapper>
    </>
};

const mapStateToProps = state => {
    const notEmpty = state.reviewReducer.searchReviewResults.length;
    return {
        searchReviewResults: state.reviewReducer.searchReviewResults,
        notEmpty: notEmpty
    }
};

export default connect(mapStateToProps, {searchAllReviewsAction})(SearchReviewPage)