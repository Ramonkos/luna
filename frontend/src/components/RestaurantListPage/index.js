import React from 'react';
import {SearchContainer, Selector, TitleContainer, BestRatedWrapper, CardWrapper, TitleMasterContainer} from "./style";
import {ErrorMessage, InputErrorWrapper} from "../../style/GlobalInput";
import {RestaurantCreationSelector} from "../RestaurantCreationPage/selectors";
import {NavLink} from "react-router-dom";
import {GenericRestaurantCard} from "../GenericRestaurantCard";

export const RestaurantDetailPage = (props) =>
    <div>
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
                <a href=''>Restaurants</a>
                <a href=''>Reviews</a>
                <a href=''>Users</a>
            </TitleContainer>
        </TitleMasterContainer>

        <BestRatedWrapper>
            <CardWrapper>
              <GenericRestaurantCard />
              <GenericRestaurantCard />
              <GenericRestaurantCard />
              <GenericRestaurantCard />
            </CardWrapper>
        </BestRatedWrapper>
        <BestRatedWrapper>
            <CardWrapper>
              <GenericRestaurantCard />
              <GenericRestaurantCard />
              <GenericRestaurantCard />
              <GenericRestaurantCard />
            </CardWrapper>
        </BestRatedWrapper>
    </div>