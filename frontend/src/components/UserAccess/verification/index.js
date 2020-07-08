import styled from "styled-components";
import { rem } from "polished";
import React from "react";
import {UserAccessTitleWrapper, UserAccessContentContainer} from "../../../style/GlobalWrappers";
import {Button} from "../../../style/GlobalButton";
import {GeneralInput, Input} from "../../../style/GlobalInput";

const VerificationContent = styled.div`
    height: ${rem('180px')};
    width: ${rem('710px')};
    display: flex;
    //flex-flow: column;
    justify-content: space-between;
    margin-bottom: ${rem('60px')};
    margin-top: ${rem('77px')};    
`

const LeftHolder = styled.div`
    height: ${rem('180px')};
    width: ${rem('340px')};
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-content: flex-start;
`

const RightHolder = styled(LeftHolder)`
    align-content: flex-end;
`
const LongButton = styled(Button)`
    width: ${rem('260px')};
`


const Verification = () => {
    return (
    <UserAccessContentContainer>
        <UserAccessTitleWrapper titletext="Verification" />
        <VerificationContent>
            <LeftHolder>
                <GeneralInput type='email' placeholder="E-Mail address" errorMessage="error" />
                <GeneralInput placeholder="Username" errorMessage="error" />
                <GeneralInput type='password' placeholder="Password" errorMessage="error" />
            </LeftHolder>
            <RightHolder>
                <GeneralInput placeholder="Validation code" errorMessage="error" />
                <GeneralInput placeholder="Location" errorMessage="error" />
                <GeneralInput type='password' placeholder="Password repeat" errorMessage="error" />
            </RightHolder>
        </VerificationContent>
        <LongButton>Finish registration</LongButton>
    </UserAccessContentContainer>
)
}

export default Verification