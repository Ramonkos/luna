import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Login from "../components/UserAccess/login";
import Registration from "../components/UserAccess/registration";
import Confirmation from "../components/UserAccess/confirmation";
import Verification from "../components/UserAccess/verification";
import NewRestaurant from "../components/RestaurantCreationPage";

const Routes = () => {
    return <>
        <Router>
            <Header/>
            <Switch>
                <Route exact path='/' component={Login}/>
                <Route exact path='/auth/signup/' component={Registration}/>
                <Route exact path='/auth/confirmation/' component={Confirmation}/>
                <Route exact path='/auth/verification/' component={Verification}/>
                <Route exact path='/newrest/' component={NewRestaurant}/>
            </Switch>
            <Footer/>
        </Router>
    </>
};

export default Routes