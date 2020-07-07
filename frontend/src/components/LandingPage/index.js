import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "../../../src/style/GlobalButton";

import styled from "styled-components";
import { rem } from "polished";
import AsianFood from "../../assets/hero-image-restaurant.jpg";
import { UserAccessTitleWrapper } from "../../../src/style/GlobalWrappers";
import { GenericRestaurantCard } from "../GenericRestaurantCard";

const LandingPageContainer = styled.div`
  width: 100%;
  height: 350px;
`;

const HomeHeroWrapper = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${AsianFood});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-bottom: 30px;
`;

const InputWrapper = styled.div`
  input {
    width: 530px;
    height: 55px;
    font-size: ${rem("20px")};
    line-height: ${rem("20px")};
    line-height: 20px;
    color: #4c4c4c;
    padding-left: 20px;
    border-radius: 3px;
    border: none;
    margin-right: 26px;
  }
`;

const BestRatedWrapper = styled.div`
  width: 100%;
  height: 640px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 44px;
`;

const CardWrapper = styled.div`
  width: 1170px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LandingPage = () => {
  return (
    <LandingPageContainer>
      <HomeHeroWrapper>
        <InputWrapper>
          <input type="text" placeholder="Search..." ></input>
        </InputWrapper>
        <Button>Search</Button>
      </HomeHeroWrapper>
      <UserAccessTitleWrapper titletext="Best Rated Restaurants" />
      <BestRatedWrapper>
        <CardWrapper>
          <GenericRestaurantCard />
          <GenericRestaurantCard />
          <GenericRestaurantCard />
          <GenericRestaurantCard />
        </CardWrapper>
      </BestRatedWrapper>
    </LandingPageContainer>
  );
};

export default LandingPage;
