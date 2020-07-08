import styled from "styled-components";
import { rem } from "polished";
import React from "react";
import {UserAccessTitleWrapper, UserAccessContentContainer} from "../../../style/GlobalWrappers";
import {Button} from "../../../style/GlobalButton";
import {GeneralInput, Input} from "../../../style/GlobalInput";

const RegistrationContent = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    margin-bottom: ${rem('50px')};
    margin-top: ${rem('77px')};    
`


const Registration = () => {
    return (
    <UserAccessContentContainer>
        <UserAccessTitleWrapper titletext="Registration" />
        <RegistrationContent>
            <GeneralInput type='email' placeholder="E-Mail address" errorMessage="error" />
        </RegistrationContent>
        <Button>Register</Button>
    </UserAccessContentContainer>
)
}

export default Registration