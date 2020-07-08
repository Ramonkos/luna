import styled from "styled-components";
import {rem} from "polished";
import React, {useState} from "react";
import {UserAccessTitleWrapper, UserAccessContentContainer} from "../../../style/GlobalWrappers";
import {Button} from "../../../style/GlobalButton";
import {Input} from "../../../style/GlobalInput";
import {connect} from "react-redux";
import {registrationVerificationAction} from "../../../store/actions/registrationActions";
import Error from "../../Error";
import {useDispatch} from "react-redux";
import {loginAction} from "../../../store/actions/loginAction";

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


const Verification = ({fieldErrors, nonFieldErrors, networkError, registrationVerificationAction, history}) => {
    const dispatch = useDispatch();

    const [data, setData] = useState({
        code: '',
        email: '',
        username: '',
        location: '',
        password: '',
        password_repeat: ''
    });

    const handleInput = e => {
        const name = e.target.name;
        const value = e.target.value;
        setData({...data, [name]: value})
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const response = await registrationVerificationAction(data);
        if (response.status === 201) {
            const loginData = {email: data.email, password: data.password};
            const loginResponse = await dispatch(loginAction(loginData));
            if (loginResponse.status === 200) {
                history.push('/')
            }
        }
    };

    return (
        <UserAccessContentContainer>
            <UserAccessTitleWrapper titletext="Verification"/>
            <VerificationContent>
                <LeftHolder>
                    <Input type='email'
                           placeholder="E-Mail"
                           name='email'
                           onChange={handleInput}
                    />
                    <Input type='text'
                           placeholder="Username"
                           name='username'
                           onChange={handleInput}
                    />
                    <Input type='password'
                           placeholder="Password"
                           name='password'
                           onChange={handleInput}
                    />
                </LeftHolder>
                <RightHolder>
                    <Input type='text'
                           placeholder="Validation Code"
                           name='code'
                           onChange={handleInput}
                    />
                    <Input type='text'
                           placeholder="Location"
                           name='location'
                           onChange={handleInput}
                    />
                    <Input type='password'
                           placeholder="Password Repeat"
                           name='password_repeat'
                           onChange={handleInput}
                    />
                </RightHolder>
                <Error errorMessage={nonFieldErrors ? nonFieldErrors : null}/>
                <Error errorMessage={networkError ? networkError : null}/>
            </VerificationContent>
            <LongButton onClick={handleSubmit}>Finish Registration</LongButton>
        </UserAccessContentContainer>
    )
};

const mapStateToProps = state => {
    return {
        fieldErrors: state.signUpReducer.verificationErrors,
        nonFieldErrors: state.signUpReducer.verificationErrors.non_field_errors,
        networkError: state.errorReducer.error
    };
};

export default connect(mapStateToProps, {registrationVerificationAction})(Verification)