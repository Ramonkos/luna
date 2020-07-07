import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Login from "../components/UserAccess/login";
import LandingPage from "../components/LandingPage";
import {Registration} from "../components/UserAccess/registration";
import {Confirmation} from "../components/UserAccess/confirmation";
import {Verification} from "../components/UserAccess/verification";
import styled from "styled-components";

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
                    <Route exact path='/auth/login' component={Login}/>
                    <Route exact path='/auth/signup/' component={Registration}/>
                    <Route exact path='/auth/confirmation/' component={Confirmation}/>
                    <Route exact path='/auth/verification/' component={Verification}/>
                </MainContainer>
            </Switch>
            <Footer/>
        </Router>
    </>
};

export default Routes