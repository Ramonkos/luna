import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Login from "../components/UserAccess/login";
import LandingPage from "../components/LandingPage";
import Registration from "../components/UserAccess/registration";
import Confirmation from "../components/UserAccess/confirmation";
import Verification from "../components/UserAccess/verification";
import styled from "styled-components";
import UserProfile from "../components/UserProfile";
import NewRestaurant from "../components/RestaurantCreationPage";
import { WriteReviewPage } from "../components/WriteReviewPage";
import RestaurantPage from "../components/RestaurantPage";
import SearchUserPage from "../components/SearchUserPage";
import SearchRestaurantPage from "../components/SearchRestaurantPage";
import SearchReviewPage from "../components/SearchReviewPage";

const MainContainer = styled.div`
  display: grid;
  grid-template-rows: 71px 1fr 95px;
  width: 100%;
  height: 85vh;
  margin-bottom: 100px;

  /* height: 100vh;
  width: 100%;
  border: red solid 2px; */
  /* margin-bottom: 180px; */
  /* display: flex;
  flex-direction: column;

  

  /* align-items: space-between; */
  /* justify-content: space-between; */
  /* footer {
    position:absolute;
    left:0;
    bottom:0;
    right:0;
  } */
`;


const Cheat = styled.div`
  height: 92px;
  width: 1000px;
`;


const Routes = () => {
  return (
    <>
      <Router>
        <Header />
        <MainContainer>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/auth/login/" component={Login} />
            <Route exact path="/auth/signup/" component={Registration} />
            <Route exact path="/auth/confirmation/" component={Confirmation} />
            <Route exact path="/auth/verification/" component={Verification} />
            <Route
              exact
              path="/search/restaurants/"
              component={SearchRestaurantPage}
            />
            <Route exact path="/search/reviews/" component={SearchReviewPage} />
            <Route exact path="/search/users/" component={SearchUserPage} />
            <Route
              path="/restaurants/:restaurantId/"
              component={RestaurantPage}
            />
            <Route
              path="/createreview/:restaurantId/"
              component={WriteReviewPage}
            />
            <Route exact path="/restaurant/create/" component={NewRestaurant} />
            <Route path="/users/:userId" component={UserProfile} />
            <Route exact path="/userprofile/" component={UserProfile} />
          </Switch>
        </MainContainer>
        {/* <Cheat/> */}
        <Footer />
      </Router>
    </>
  );
};

export default Routes;
