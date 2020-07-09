import React, {useState} from 'react';
import {
    LinkWrapper,
    SearchContainer,
    TitleContainer,
    BestRatedWrapper,
    CardWrapper,
    TitleMasterContainer
} from "./style";
import {NavLink} from "react-router-dom";
import GenericSpinner from "../GenericSpinner";
import GenericReviewList from "../GenericReviewList";
import {connect} from "react-redux";
import {searchAllReviewsAction} from "../../store/actions/reviewActions";

// Component

const SearchReviewPage = ({notEmpty, searchReviewResults, searchAllReviewsAction}) => {
    const displayMessage = () => !notEmpty ? <GenericSpinner/> : null;

    const [search, setSearch] = useState('');

    const inputHandler = (e, func) => {
        func(e.currentTarget.value)
    };

    const keyPressHandler = async e => {
        if (e.key === "Enter") {
            const search_location = '&search_location=reviews';
            const search_fields = '&search_fields=restaurant_review_about__name&search_fields=restaurant_review_about__city';
            const search_string = `?search=${search}`;
            const response = await searchAllReviewsAction(search_string + search_fields + search_location);
            return response
        }
    };

    return <div>
        <SearchContainer>
            <input
                type="text"
                name="search"
                placeholder="Search for reviews by restaurant's name or by city...."
                value={search}
                onChange={e => inputHandler(e, setSearch)}
                onKeyPress={keyPressHandler}
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
    </div>
};

const mapStateToProps = state => {
    const notEmpty = state.reviewReducer.searchReviewResults.length;
    return {
        searchReviewResults: state.reviewReducer.searchReviewResults,
        notEmpty: notEmpty
    }
};

export default connect(mapStateToProps, {searchAllReviewsAction})(SearchReviewPage)