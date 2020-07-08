import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Login from "../components/UserAccess/login";
import LandingPage from "../components/LandingPage";
import Registration from "../components/UserAccess/registration";
import Confirmation from "../components/UserAccess/confirmation";
import Verification from "../components/UserAccess/verification";
import styled from "styled-components";
import {UserProfile} from "../components/UserProfile";
import NewRestaurant from "../components/RestaurantCreationPage";
import {WriteReviewPage} from "../components/WriteReviewPage";
import RestaurantPage from "../components/RestaurantPage";
import NotFoundPage from "../components/NotFoundPage";
import {RestaurantDetailPage} from "../components/RestaurantListPage";

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  //background-color: red;
`;

const Routes = () => {
    return <>
        <Router>
            <Header/>
            <Switch>
                <MainContainer>
                    <Route exact path='/' component={LandingPage}/>
                    <Route exact path='/auth/login/' component={Login}/>
                    <Route exact path='/auth/signup/' component={Registration}/>
                    <Route exact path='/auth/confirmation/' component={Confirmation}/>
                    <Route exact path='/auth/verification/' component={Verification}/>
                    <Route exact path='/search/' component={RestaurantDetailPage}/>
                    <Route path='/restaurants/:restaurantId/' component={RestaurantPage}/>
                    <Route path='/reviews/:reviewId/' component={WriteReviewPage}/>
                    <Route exact path='/restaurant/create/' component={NewRestaurant}/>
                    {/*<Route path='/users/:userId' component={UserDetail}/>*/}
                    <Route exact path='/userprofile/' component={UserProfile}/>
                    {/*<Route path="*" component={NotFoundPage} />*/}
                </MainContainer>
            </Switch>
            <Footer/>
        </Router>
    </>
};

export default Routes