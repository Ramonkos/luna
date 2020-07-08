import styled from "styled-components";
import {rem} from "polished";
import React from "react";
import {UserAccessTitleWrapper, UserAccessContentContainer} from "../../../style/GlobalWrappers";
import {Button} from "../../../style/GlobalButton";
import {GeneralInput, Input} from "../../../style/GlobalInput";

const LoginContent = styled.div`
    height: ${rem('120px')};
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    margin-bottom: ${rem('50px')};
    margin-top: ${rem('88px')};    
`

const Login = () => {
    return (
        <UserAccessContentContainer>
            <UserAccessTitleWrapper titletext="Login"/>
            <LoginContent>
                <GeneralInput placeholder="Username" errorMessage="error" />
                <GeneralInput type='password' placeholder="Password" errorMessage="error" />
            </LoginContent>
            <Button>Login</Button>
        </UserAccessContentContainer>
    )
};

export default Login