import styled from "styled-components";
import { rem } from "polished";
import React from "react";
import {UserAccessTitleWrapper, UserAccessContentContainer} from "../../../style/GlobalWrappers";
import {Button} from "../../../style/GlobalButton";
import {Input} from "../../../style/GlobalInput";

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


export const Verification = () => {
    return (
    <UserAccessContentContainer>
        <UserAccessTitleWrapper titletext="Verification" />
        <VerificationContent>
            <LeftHolder>
                <Input type='email' placeholder="E-Mail address" />
                <Input placeholder="Username" />
                <Input type='password' placeholder="Password" />
            </LeftHolder>
            <RightHolder>
                <Input placeholder="Validation code" />
                <Input placeholder="Location" />
                <Input type='password' placeholder="Password repeat" />
            </RightHolder>
        </VerificationContent>
        <LongButton>Finish registration</LongButton>
    </UserAccessContentContainer>
)
}