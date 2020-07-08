import styled from "styled-components";
import {rem} from "polished";
import React from "react";
import {ErrorMessage, InputErrorWrapper} from "../../style/GlobalInput";

export const RestaurantCreationSelector = styled.select`
    width: ${rem('370px')};
    height: ${rem('50px')};
    color: #D8D8D8;
    font-family: Karla,serif;  //TODO Get Karla font style
    font-weight: normal;
    font-size: ${rem('22px')};
    line-height: ${rem('26px')};
    border: 1px solid #EBEBEB;
    border-radius: 3px;
    padding-left: ${rem('23px')};
`

export const RestaurantCategorySelect = (props) => {
    return (
        <InputErrorWrapper>
            <RestaurantCreationSelector>
                <option required value="">Select a value...</option>
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

            </RestaurantCreationSelector>
            <ErrorMessage>{props.errorMessage ? props.errorMessage : ''}</ErrorMessage>
        </InputErrorWrapper>
    )
}

export const RestaurantCountrySelect = (props) => {
    return (
        <InputErrorWrapper>
            <RestaurantCreationSelector>
                <option required value="">Select a value...</option>
                <option value="1">Switzerland</option>
                <option value="2">Germany</option>
                <option value="3">England</option>
                <option value="4">Portugal</option>
                <option value="5">Spain</option>
                <option value="6">Hungary</option>
            </RestaurantCreationSelector>
            <ErrorMessage>{props.errorMessage ? props.errorMessage : ''}</ErrorMessage>
        </InputErrorWrapper>
    )
}

export const RestaurantPriceSelect = (props) => {
    return (
        <InputErrorWrapper>
            <RestaurantCreationSelector>
                <option required value="">Select a value...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </RestaurantCreationSelector>
            <ErrorMessage>{props.errorMessage ? props.errorMessage : ''}</ErrorMessage>
        </InputErrorWrapper>
    )
}