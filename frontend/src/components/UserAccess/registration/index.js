import styled from "styled-components";
import { rem } from "polished";
import React from "react";
import {UserAccessTitleWrapper, UserAccessContentContainer} from "../../../style/GlobalWrappers";
import {Button} from "../../../style/GlobalButton";
import {Input} from "../../../style/GlobalInput";

const RegistrationContent = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    margin-bottom: ${rem('50px')};
    margin-top: ${rem('77px')};    
`


export const Registration = () => {
    return (
    <UserAccessContentContainer>
        <UserAccessTitleWrapper titletext="Registration" />
        <RegistrationContent>
            <Input type='email' placeholder="E-Mail address" />
        </RegistrationContent>
        <Button>Register</Button>
    </UserAccessContentContainer>
)
}