import styled from "styled-components";
import {rem} from "polished";
import React, {useState} from "react";
import {UserAccessTitleWrapper, UserAccessContentContainer} from "../../style/GlobalWrappers";
import {Button} from "../../style/GlobalButton";
import {
    ErrorMessage,
    GeneralInput,
    Input, InputErrorWrapper,
    RestaurantCreationInput,
    RestaurantGeneralInput
} from "../../style/GlobalInput";
import {BlackBold20Left} from "../../style/GlobalTitles";
import {
    RestaurantCategorySelect,
    RestaurantCountrySelect,
    RestaurantCreationSelector,
    RestaurantPriceSelect
} from "./selectors";
import {connect} from "react-redux";
import {createRestaurantAction} from "../../store/actions/restaurantActions";

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

const NewRestaurant = ({error, history, createRestaurantAction}) => {

    const [data, setData] = useState({
        name: 'React Restaurant',
        category: '6',
        country: 'Germany',
        street: '1234 Test St',
        city: 'Hamburg',
        zip: '1234',
        website: 'www.test.com',
        phone: '1234567890',
        email: 'test@something.com',
        opening_hours: 'PH Hours',
        price_level: '3',
        restaurant_image: null,
    });

    const handleInput = e => {
        const name = e.target.name;
        const value = e.target.value;
        setData({...data, [name]: value})
    };

    const handleSubmit = async e => {
        console.log(data)
        const restaurantData = new FormData();
        restaurantData.append('name', data.name);
        restaurantData.append('category', data.category);
        restaurantData.append('country', data.country);
        restaurantData.append('street', data.street);
        restaurantData.append('city', data.city);
        restaurantData.append('zip', data.zip);
        restaurantData.append('website', data.website);
        restaurantData.append('phone', data.phone);
        restaurantData.append('email', data.email);
        restaurantData.append('opening_hours', data.opening_hours);
        restaurantData.append('price_level', data.price_level);
        e.preventDefault();
        console.log([...restaurantData]);
        const response = await createRestaurantAction(data);
        if (response.status === 201) {
            history.push(`/restaurants/${response.data.id}/`)
        }
    };

    return (
        <UserAccessContentContainer2>
            <UserAccessTitleWrapper titletext="Create new restaurant"/>
            <NewRestaurantFieldContainer>

                <NewRestaurantTitle>Basic</NewRestaurantTitle>
                <InputBlockWrapper>
                    <InputWrapper>
                        <InputName>Name *</InputName> {/*TODO * position correction*/}
                        <RestaurantCreationInput
                            errorMessage={error}
                            name='name'
                            value={data.name}
                            onChange={handleInput}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <InputName>Category *</InputName>
                        <InputErrorWrapper>
                            <RestaurantCreationSelector
                                name='category'
                                value={data.category}
                                onChange={handleInput}
                            >
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
                            <ErrorMessage>{error ? error : ''}</ErrorMessage>
                        </InputErrorWrapper>
                    </InputWrapper>
                    <InputWrapper>
                        <InputName>Country *</InputName> {/*TODO * position correction*/}
                        <RestaurantCreationInput
                            errorMessage={error}
                            name='country'
                            value={data.country}
                            onChange={handleInput}
                        />
                    </InputWrapper>
                </InputBlockWrapper>

                <NewRestaurantTitle>Address</NewRestaurantTitle>
                <InputBlockWrapper>
                    <InputWrapper>
                        <InputName>Street *</InputName> {/*TODO * position correction*/}
                        <RestaurantCreationInput
                            errorMessage={error}
                            name='street'
                            value={data.street}
                            onChange={handleInput}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <InputName>City *</InputName> {/*TODO * position correction*/}
                        <RestaurantCreationInput
                            errorMessage={error}
                            name='city'
                            value={data.city}
                            onChange={handleInput}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <InputName>Zip</InputName>
                        <RestaurantCreationInput
                            errorMessage={error}
                            name='zip'
                            value={data.zip}
                            onChange={handleInput}
                        />
                    </InputWrapper>
                </InputBlockWrapper>

                <NewRestaurantTitle>Contact</NewRestaurantTitle>
                <InputBlockWrapper>
                    <InputWrapper>
                        <InputName>Website</InputName>
                        <RestaurantCreationInput
                            errorMessage={error}
                            name='website'
                            value={data.website}
                            onChange={handleInput}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <InputName>Phone *</InputName> {/*TODO * position correction*/}
                        <RestaurantCreationInput
                            errorMessage={error}
                            name='phone'
                            value={data.phone}
                            onChange={handleInput}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <InputName>Email</InputName>
                        <RestaurantCreationInput
                            errorMessage={error}
                            name='email'
                            value={data.email}
                            onChange={handleInput}
                        />
                    </InputWrapper>
                </InputBlockWrapper>

                <NewRestaurantTitle>Details</NewRestaurantTitle>
                <InputBlockWrapper>
                    <InputWrapper>
                        <InputName>Opening hours *</InputName> {/*TODO * position correction*/}
                        <RestaurantCreationInput
                            errorMessage={error}
                            name='opening_hours'
                            value={data.opening_hours}
                            onChange={handleInput}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <InputName>Price level</InputName> {/*TODO * position correction*/}
                        <InputErrorWrapper>
                            <RestaurantCreationSelector
                                name='price_level'
                                value={data.price_level}
                                onChange={handleInput}
                            >
                                <option required value="">Select a value...</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </RestaurantCreationSelector>
                            <ErrorMessage>{error ? error : ''}</ErrorMessage>
                        </InputErrorWrapper>
                    </InputWrapper>
                    {/*<InputWrapper>*/}
                    {/*    <InputName>Email</InputName>*/}
                    {/*    <RestaurantGeneralInput errorMessage={error}/>*/}
                    {/*</InputWrapper>*/}
                </InputBlockWrapper>
            </NewRestaurantFieldContainer>
            <Button onClick={handleSubmit}>Create</Button>
        </UserAccessContentContainer2>
    )
};

const mapStateToProps = state => {
    return {
        error: state.errorReducer.error
    }
};

export default connect(mapStateToProps, {createRestaurantAction})(NewRestaurant)