import styled from "styled-components";
import {rem} from "polished";
import React from "react";
import {UserAccessTitleWrapper, UserAccessContentContainer} from "../../style/GlobalWrappers";
import {Button} from "../../style/GlobalButton";
import {GeneralInput, Input, RestaurantGeneralInput} from "../../style/GlobalInput";
import {BlackBold20Left} from "../../style/GlobalTitles";
import {RestaurantCategorySelect, RestaurantCountrySelect, RestaurantPriceSelect} from "./selectors";

const VerificationContent = styled.div`
    height: ${rem('280px')};
    width: ${rem('710px')};
    display: flex;
    //flex-flow: column;
    justify-content: space-between;
    margin-bottom: ${rem('60px')};
    margin-top: ${rem('77px')};    
`

const LongButton = styled(Button)`
    width: ${rem('260px')};
`

const InputWrapper = styled.div`
    height: ${rem('105px')};
    width: ${rem('370px')};
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    //background-color: gold; 
`

const UserAccessContentContainer2 = styled(UserAccessContentContainer)`
    //background-color: cadetblue;
`

const NewRestaurantFieldContainer = styled.div`
    width: ${rem('1180px')};
    height: ${rem('592px')};    
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    margin-top: ${rem('27px')};
    //background-color: burlywood;
`

const NewRestaurantTitle = styled(BlackBold20Left)`
    font-family: 'Karla', sans-serif;
    color: #4C4C4C;
    text-transform: capitalize;
    height: ${rem('23px')};    
    margin-bottom: ${rem('9px')};
    //background-color: cornflowerblue;
`

const InputBlockWrapper = styled.div`
    height: ${rem('105px')};
    width: ${rem('1180px')};
    display: flex;
    justify-content: space-between;
    margin-bottom: ${rem('9px')};
    //background-color: darkorange;
`
const InputName = styled(BlackBold20Left)`
    height: ${rem('23px')};
    color: #979797;
    //background-color: darkseagreen;
`

const NewRestaurant = () => {
    return (
        <UserAccessContentContainer2>
            <UserAccessTitleWrapper titletext="Create new restaurant"/>
            <NewRestaurantFieldContainer>

                <NewRestaurantTitle>Basic</NewRestaurantTitle>
                <InputBlockWrapper>
                    <InputWrapper>
                        <InputName>Name *</InputName> {/*TODO * position correction*/}
                        <RestaurantGeneralInput errorMessage="error"/>
                    </InputWrapper>
                    <InputWrapper>
                        <InputName>Category *</InputName> {/*TODO * position correction*/}
                        <RestaurantCategorySelect errorMessage="error"/>
                    </InputWrapper>
                    <InputWrapper>
                        <InputName>Country *</InputName> {/*TODO * position correction*/}
                        <RestaurantCountrySelect errorMessage="error"/>
                    </InputWrapper>
                </InputBlockWrapper>

                <NewRestaurantTitle>Address</NewRestaurantTitle>
                <InputBlockWrapper>
                    <InputWrapper>
                        <InputName>Street *</InputName> {/*TODO * position correction*/}
                        <RestaurantGeneralInput errorMessage="error"/>
                    </InputWrapper>
                    <InputWrapper>
                        <InputName>City *</InputName> {/*TODO * position correction*/}
                        <RestaurantGeneralInput errorMessage="error"/>
                    </InputWrapper>
                    <InputWrapper>
                        <InputName>Zip</InputName>
                        <RestaurantGeneralInput errorMessage="error"/>
                    </InputWrapper>
                </InputBlockWrapper>

                <NewRestaurantTitle>Contact</NewRestaurantTitle>
                <InputBlockWrapper>
                    <InputWrapper>
                        <InputName>Website</InputName>
                        <RestaurantGeneralInput errorMessage="error"/>
                    </InputWrapper>
                    <InputWrapper>
                        <InputName>Phone *</InputName> {/*TODO * position correction*/}
                        <RestaurantGeneralInput errorMessage="error"/>
                    </InputWrapper>
                    <InputWrapper>
                        <InputName>Email</InputName>
                        <RestaurantGeneralInput errorMessage="error"/>
                    </InputWrapper>
                </InputBlockWrapper>

                <NewRestaurantTitle>Details</NewRestaurantTitle>
                <InputBlockWrapper>
                    <InputWrapper>
                        <InputName>Opening hours *</InputName> {/*TODO * position correction*/}
                        <RestaurantGeneralInput errorMessage="error"/>
                    </InputWrapper>
                    <InputWrapper>
                        <InputName>Price level</InputName> {/*TODO * position correction*/}
                        <RestaurantPriceSelect errorMessage="error"/>
                    </InputWrapper>
                    <InputWrapper>
                        <InputName>Email</InputName>
                        <RestaurantGeneralInput errorMessage="error"/>
                    </InputWrapper>
                </InputBlockWrapper>

            </NewRestaurantFieldContainer>

            <Button>Create</Button>
        </UserAccessContentContainer2>
    )
}

export default NewRestaurant