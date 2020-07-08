import styled from "styled-components";
import {rem} from "polished";
import React, {useState} from "react";
import {UserAccessTitleWrapper, UserAccessContentContainer} from "../../../style/GlobalWrappers";
import {Button} from "../../../style/GlobalButton";
import {Input} from "../../../style/GlobalInput";
import {connect} from "react-redux";
import {signUpAction} from "../../../store/actions/registrationActions";
import Error from "../../Error";

const RegistrationContent = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    margin-bottom: ${rem('50px')};
    margin-top: ${rem('77px')};
    align-items: center;    
`


const Registration = ({error, signUpAction, history}) => {
    let [email, setEmail] = useState('');

    const inputHandler = (e, func) => {
        func(e.currentTarget.value)
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const response = await signUpAction(email);
        if (response.status < 400) {
            history.push('/auth/confirmation/')
        }
    };

    return (
        <UserAccessContentContainer>
            <UserAccessTitleWrapper titletext="Registration"/>
            <RegistrationContent>
                <Input
                    type='email'
                    placeholder="E-Mail"
                    value={email}
                    onChange={e => inputHandler(e, setEmail)}
                />
                {<Error errorMessage={error}/>}
            </RegistrationContent>
            <Button onClick={handleSubmit}>Register</Button>
        </UserAccessContentContainer>
    )
};

const mapStateToProps = state => {
    return {
        error: state.signUpReducer.error
    }
};

export default connect(mapStateToProps, {signUpAction})(Registration)