import styled from "styled-components";
import {rem} from "polished";
import React, {useState} from "react";
import {UserAccessTitleWrapper, UserAccessContentContainer} from "../../../style/GlobalWrappers";
import {Button} from "../../../style/GlobalButton";
import {Input} from "../../../style/GlobalInput";
import {connect} from "react-redux";
import {registrationVerificationAction, resetError} from "../../../store/actions/registrationActions";
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


const Verification = ({fieldErrors, nonFieldErrors, networkError, registrationVerificationAction, history, error}) => {
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
        dispatch(resetError());
        const response = await registrationVerificationAction(data);
        if (response.status === 201) {
            const loginData = {email: data.email, password: data.password};
            const loginResponse = await dispatch(loginAction(loginData));
            if (loginResponse.status === 200) {
                dispatch(resetError());
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
                           value={data['email']}
                    />
                    <Error errorMessage={fieldErrors['email']}/>
                    <Input type='text'
                           placeholder="Username"
                           name='username'
                           onChange={handleInput}
                           value={data['username']}
                    />
                    <Error errorMessage={fieldErrors['username']}/>
                    <Input type='password'
                           placeholder="Password"
                           name='password'
                           onChange={handleInput}
                           value={data['password']}
                    />
                    <Error errorMessage={fieldErrors['password']}/>
                </LeftHolder>
                <RightHolder>
                    <Input type='text'
                           placeholder="Validation Code"
                           name='code'
                           onChange={handleInput}
                           value={data['code']}
                    />
                    <Error errorMessage={fieldErrors['code']}/>
                    <Input type='text'
                           placeholder="Location"
                           name='location'
                           onChange={handleInput}
                           value={data['location']}
                    />
                    <Error errorMessage={fieldErrors['password']}/>
                    <Input type='password'
                           placeholder="Password Repeat"
                           name='password_repeat'
                           onChange={handleInput}
                           value={data['password_repeat']}
                    />
                    <Error errorMessage={fieldErrors['password_repeat']}/>
                </RightHolder>
            </VerificationContent>
            <LongButton onClick={handleSubmit}>Finish Registration</LongButton>
            <Error errorMessage={nonFieldErrors ? nonFieldErrors : null}/>
            <Error errorMessage={networkError ? networkError : null}/>
            <Error errorMessage={error ? error : null}/>
        </UserAccessContentContainer>
    )
};

const mapStateToProps = state => {
    return {
        fieldErrors: state.signUpReducer.verificationErrors,
        nonFieldErrors: state.signUpReducer.verificationErrors.non_field_errors,
        networkError: state.errorReducer.error,
        error: state.signUpReducer.error
    };
};

export default connect(mapStateToProps, {registrationVerificationAction})(Verification)