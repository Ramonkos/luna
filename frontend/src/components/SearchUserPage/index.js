import React, {useState} from 'react';
import {
    SearchContainer,
    TitleContainer,
    BestRatedWrapper,
    CardWrapper,
    TitleMasterContainer,
    LinkWrapper
} from "./style";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {searchAllUsersAction} from "../../store/actions/userActions";
import GenericSpinner from "../GenericSpinner";
import GenericUserList from "../GenericUserList";
import {ParentWrapper, ValidSearchContainer} from "../SearchRestaurantPage/style";

const SearchUserPage = ({searchUserResults, notEmpty, searchAllUsersAction}) => {

    const displayMessage = () => !notEmpty ?
    <ParentWrapper>
        <ValidSearchContainer>
            <p>
              Please enter valid search
            </p>
        </ValidSearchContainer>

    </ParentWrapper> : null;



    const [search, setSearch] = useState('');

    const inputHandler = (e, func) => {
        func(e.currentTarget.value)
    };

    const keyPressHandler = async e => {
        if (e.key === "Enter") {
            const search_location = '&search_location=users';
            const search_fields = '&search_fields=username&search_fields=first_name&search_fields=last_name';
            const search_string = `?search=${search}`;
            const response = await searchAllUsersAction(search_string + search_fields + search_location);
            return response
        }
    };

    return (
        <div>
            <SearchContainer>
                <input
                    type="text"
                    name="search"
                    placeholder="Search for Users by username or by first or last name...."
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
                    {searchUserResults && notEmpty ?
                        <GenericUserList items={searchUserResults} key={'search-review-results'}/> : displayMessage()}
                </CardWrapper>
            </BestRatedWrapper>
        </div>
    );
};

const mapStateToProps = state => {
    const notEmpty = state.userReducer.searchUserResults.length;
    return {
        searchUserResults: state.userReducer.searchUserResults,
        notEmpty: notEmpty
    }
};

export default connect(mapStateToProps, {searchAllUsersAction})(SearchUserPage)