import React from 'react';
import styled from "styled-components";
import { rem } from "polished";
import {defaultRestaurantCardPicture} from '../../constants';
import {
    RestaurantAddress,
    RestaurantDetailsContainer,
    RestaurantMainContainer,
    RestaurantName, Stars,
    StarsReviewContainer,
    TopBar
} from "./style";

    
export const GenericRestaurantCard = () => (
    <RestaurantMainContainer>
        <TopBar />
        <RestaurantDetailsContainer>
            <RestaurantName> Restaurant TEST </RestaurantName>
            <RestaurantAddress>Zurich</RestaurantAddress>
            <StarsReviewContainer>
                <Stars />
                <p>24</p>
            </StarsReviewContainer>
        </RestaurantDetailsContainer>
        <img src={defaultRestaurantCardPicture} alt="Restaurant Picture" />
    </RestaurantMainContainer>
);