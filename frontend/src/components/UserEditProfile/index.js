import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { rem } from "polished";

import { Button } from "../../../src/style/GlobalButton";

const UserEditContainer = styled.div`
  width: 620px;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    color: #BA0000;
  }
`;

const InputBasic = styled.input`
  border-radius: 3px;
  font-weight: bold;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  height: 52px;
  width: 324px;
  font-size: ${rem("20px")};
  line-height: ${rem("23px")};
  font-weight: bold;
  color: #979797;
  padding-left: 15px;
`;

const InputLarge = styled(InputBasic)`
  width: 582px;
`;

const TextArea = styled.textarea`
  border-radius: 3px;
  font-weight: bold;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  height: 101px;
  width: 582px;
  font-size: ${rem("20px")};
  line-height: ${rem("23px")};
  font-weight: bold;
  color: #979797;
  padding: 10px;
  margin-bottom: 36px;
`;

const Title = styled.h3`
  text-transform: uppercase;
  color: #303030;
  margin-top: 5px;
  margin-bottom: 25px;
`;

const InputName = styled.h4`
  color: #979797;
  margin-bottom: 15px;
`;

const ErrorMessage = styled.p`
  color: #BA0000;
`;

const UserEditProfile = (props) => {
  // const initialState = {
  //   email: null,
  // };

  // const [value, setValue] = useState(initialState);

  return (
    <UserEditContainer>
      <Title>Edit Userprofile</Title>
      <InputWrapper>
        <InputName>Username</InputName>
        <InputBasic
          // onChange={(e) => setValue({ ...value, email: e.currentTarget.value })}
          // value={value.email}
          id="edit_username"
          type="text"
          name="username"
        />
        <ErrorMessage>Error, you did it wrong!</ErrorMessage>
      </InputWrapper>
      <InputWrapper>
        <InputName>First name</InputName>
        <InputBasic
          // onChange={(e) => setValue({ ...value, email: e.currentTarget.value })}
          // value={value.email}
          id="edit_firstname"
          type="text"
          name="firstname"
        />
      </InputWrapper>
      <InputWrapper>
        <InputName>Last name</InputName>
        <InputBasic
          // onChange={(e) => setValue({ ...value, email: e.currentTarget.value })}
          // value={value.email}
          id="edit_lastname"
          type="text"
          name="lastname"
        />
      </InputWrapper>
      <InputWrapper>
        <InputName>E-Mail</InputName>
        <InputBasic
          // onChange={(e) => setValue({ ...value, email: e.currentTarget.value })}
          // value={value.email}
          id="edit_email"
          type="text"
          name="email"
        />
      </InputWrapper>
      <InputWrapper>
        <InputName>Location</InputName>
        <InputBasic
          // onChange={(e) => setValue({ ...value, email: e.currentTarget.value })}
          // value={value.email}
          id="edit_location"
          type="text"
          name="location"
        />
      </InputWrapper>
      <InputWrapper>
        <InputName>Things I love</InputName>
        <InputLarge
          // onChange={(e) => setValue({ ...value, email: e.currentTarget.value })}
          // value={value.email}
          id="edit_things_i_love"
          type="text"
          name="things_i_love"
        />
      </InputWrapper>
      <InputWrapper>
        <InputName>Description</InputName>
        <TextArea
          // onChange={(e) => setValue({ ...value, email: e.currentTarget.value })}
          // value={value.email}
          id="edit_description"
          type="text"
          name="description"
        />
      </InputWrapper>
      <ButtonWrapper>
        <Button onClick={() => console.log('click')}>Save</Button>
        <a onClick={() => console.log('delete')}>Delete account</a>
      </ButtonWrapper>
    </UserEditContainer>
  );
};

export default UserEditProfile;
