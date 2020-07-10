import styled from "styled-components";
import {rem} from "polished";
import React, {useState} from "react";
import {UserAccessTitleWrapper, UserAccessContentContainer} from "../../style/GlobalWrappers";
import {Button, SmallOrangeButton} from "../../style/GlobalButton";
import {ErrorMessage, RestaurantCreationInput} from "../../style/GlobalInput";
import {BlackBold20Left} from "../../style/GlobalTitles";
import {connect} from "react-redux";
import {createRestaurantAction} from "../../store/actions/restaurantActions";

// Styling

const NewRestaurantFieldContainer = styled.div`
    width: ${rem('1180px')};
    display: flex;
    flex-flow: column;
    margin-top: ${rem('27px')};
`;

const NewRestaurantTitle = styled(BlackBold20Left)`
    font-family: 'Karla', sans-serif;
    color: #4C4C4C;
    text-transform: capitalize;
    height: ${rem('23px')};    
    margin-bottom: ${rem('9px')};
`;

const InputBlockWrapper = styled.div`
    height: ${rem('80px')};  //originally was 105px, now 80
    width: ${rem('1180px')};
    display: flex;
    justify-content: space-between;
    margin-bottom: ${rem('9px')};
`;

const InputWrapper = styled.div`
    height: ${rem('80px')};  //originally was 105px, now 80
    width: ${rem('370px')};
    display: flex;
    flex-flow: column;
    justify-content: space-between;
`;

const InputName = styled(BlackBold20Left)`
    height: ${rem('23px')};
    color: #979797;
`;

export const RestaurantCreationSelector = styled.select`
    width: ${rem('370px')};
    height: ${rem('50px')};
    color: #979797;
    font-family: Karla,serif;  //TODO Get Karla font style
    font-weight: normal;
    font-size: ${rem('22px')};
    line-height: ${rem('26px')};
    border: 1px solid #EBEBEB;
    border-radius: 3px;
    padding-left: ${rem('23px')};
`;

const UploadButton = styled(SmallOrangeButton)`
  width: ${rem('220px')};
`;

// Component

const NewRestaurant = ({error, history, createRestaurantAction}) => {

    const [data, setData] = useState({
        name: '',
        category: '',
        country: '',
        street: '',
        city: '',
        zip: '',
        website: '',
        phone: '',
        email: '',
        opening_hours: '',
        price_level: '',
        restaurant_image: null,
    });

    const handleInput = e => {
        const name = e.target.name;
        const value = e.target.value;
        setData({...data, [name]: value})
    };

    const handleSubmit = async e => {
        e.preventDefault();
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
        if (data.restaurant_image) {
            restaurantData.append('restaurant_image', data.restaurant_image);
        }
        const response = await createRestaurantAction(restaurantData);
        if (response.status === 201) {
            history.push(`/restaurants/${response.data.id}/`)
        }
    };

    const hiddenFileInput = React.useRef(null);

    const handleClick = event => {
        hiddenFileInput.current.click();
    };

    const imageSelectHandler = e => {
        if (e.target.files[0]) {
            setData({...data, restaurant_image: e.target.files[0]})
        }
    };

    return (
        <UserAccessContentContainer>
            <UserAccessTitleWrapper titletext="Create new restaurant"/>
            <NewRestaurantFieldContainer>
                <NewRestaurantTitle>Basic</NewRestaurantTitle>
                <InputBlockWrapper>
                    <InputWrapper>
                        <InputName>Name *</InputName>
                        <RestaurantCreationInput
                            name='name'
                            value={data.name}
                            onChange={handleInput}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <InputName>Category *</InputName>
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
                    </InputWrapper>
                    <InputWrapper>
                        <InputName>Country *</InputName>
                        <RestaurantCreationInput
                            name='country'
                            value={data.country}
                            onChange={handleInput}
                        />
                    </InputWrapper>
                </InputBlockWrapper>
                <NewRestaurantTitle>Address</NewRestaurantTitle>
                <InputBlockWrapper>
                    <InputWrapper>
                        <InputName>Street *</InputName>
                        <RestaurantCreationInput
                            name='street'
                            value={data.street}
                            onChange={handleInput}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <InputName>City *</InputName>
                        <RestaurantCreationInput
                            name='city'
                            value={data.city}
                            onChange={handleInput}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <InputName>Zip</InputName>
                        <RestaurantCreationInput
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
                            name='website'
                            value={data.website}
                            onChange={handleInput}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <InputName>Phone *</InputName>
                        <RestaurantCreationInput
                            name='phone'
                            value={data.phone}
                            onChange={handleInput}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <InputName>Email</InputName>
                        <RestaurantCreationInput
                            name='email'
                            value={data.email}
                            onChange={handleInput}
                        />
                    </InputWrapper>
                </InputBlockWrapper>
                <NewRestaurantTitle>Details</NewRestaurantTitle>
                <InputBlockWrapper>
                    <InputWrapper>
                        <InputName>Opening hours *</InputName>
                        <RestaurantCreationInput
                            name='opening_hours'
                            value={data.opening_hours}
                            onChange={handleInput}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <InputName>Price level</InputName>
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
                    </InputWrapper>
                    <InputWrapper>
                        <InputName>Image</InputName>
                            <UploadButton onClick={handleClick}>
                                Choose a file...
                            </UploadButton>
                            <input
                                type="file"
                                name="restaurant_image"
                                ref={hiddenFileInput}
                                onChange={imageSelectHandler}
                                style={{display: 'none'}}
                            />
                    </InputWrapper>
                </InputBlockWrapper>
                <ErrorMessage>{error ? error : ''}</ErrorMessage>
            </NewRestaurantFieldContainer>
            <Button onClick={handleSubmit}>Create</Button>
        </UserAccessContentContainer>
    )
};

const mapStateToProps = state => {
    return {
        error: state.errorReducer.error
    }
};

export default connect(mapStateToProps, {createRestaurantAction})(NewRestaurant)