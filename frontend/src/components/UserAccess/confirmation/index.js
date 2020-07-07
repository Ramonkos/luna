import styled from "styled-components";
import {rem} from "polished";
import React from "react";
import {UserAccessTitleWrapper, UserAccessContentContainer} from "../../../style/GlobalWrappers";
import {Button} from "../../../style/GlobalButton";
import {Link} from "react-router-dom";

const ConfirmationContent = styled.div`
    width: ${rem('500px')};
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    margin-bottom: ${rem('50px')};
    margin-top: ${rem('77px')};
    font-size: ${rem('20px')};
`

const Confirmation = () => {
    return (
        <UserAccessContentContainer>
            <UserAccessTitleWrapper titletext="Registration"/>
            <ConfirmationContent>
                Thanks for your registration.<br/>
                Our hard working monkeys are preparing a digital message called E-Mail that will be sent to you soon.
                Since monkeys aren't good in writing the message could end up in you junk folder. Our apologies for any
                inconvenience.
            </ConfirmationContent>
            <Button>
                <Link to={'/auth/verification/'}>Register</Link>
            </Button>
        </UserAccessContentContainer>
    )
};

export default Confirmation