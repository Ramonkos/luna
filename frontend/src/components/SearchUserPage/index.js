import React from 'react';
import {SearchContainer, TitleContainer, BestRatedWrapper, CardWrapper, TitleMasterContainer, LinkWrapper} from "./style";
import {GenericUserCard} from "../GenericUserCard";
import {NavLink} from "react-router-dom";

export const SearchUserPage = (props) => {
    return (
        <div>
            <SearchContainer>
                <input type="text" id="search" name="search" placeholder="Search"/>
            </SearchContainer>
            <TitleMasterContainer>
                <TitleContainer>
                    <LinkWrapper>
                        <NavLink to="/search/restaurants">Restaurants</NavLink>
                    </LinkWrapper>
                    <LinkWrapper>
                        <NavLink to="/search/reviews">Reviews</NavLink>
                    </LinkWrapper>
                    <LinkWrapper>
                        <NavLink to="/search/users">Users</NavLink>
                    </LinkWrapper>
                </TitleContainer>
            </TitleMasterContainer>

            <BestRatedWrapper>
                <CardWrapper>
                    <GenericUserCard/>
                    <GenericUserCard/>
                    <GenericUserCard/>
                    <GenericUserCard/>
                </CardWrapper>
            </BestRatedWrapper>
            <BestRatedWrapper>
                <CardWrapper>
                    <GenericUserCard/>
                    <GenericUserCard/>
                    <GenericUserCard/>
                    <GenericUserCard/>
                </CardWrapper>
            </BestRatedWrapper>
            <BestRatedWrapper>
                <CardWrapper>
                    <GenericUserCard/>
                    <GenericUserCard/>
                    <GenericUserCard/>
                    <GenericUserCard/>
                </CardWrapper>
            </BestRatedWrapper>
        </div>
    );
};