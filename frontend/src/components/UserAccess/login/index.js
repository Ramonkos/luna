import styled from "styled-components";
import {rem} from "polished";
import React, {useState} from "react";
import {UserAccessTitleWrapper, UserAccessContentContainer} from "../../../style/GlobalWrappers";
import {Button} from "../../../style/GlobalButton";
import {Input} from "../../../style/GlobalInput";
import {withRouter, Link} from 'react-router-dom'
import {connect} from "react-redux";
import {loginAction} from "../../../store/actions/loginAction";
import Error from "../../Error";

const LoginContent = styled.div`
    height: ${rem('120px')};
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    margin-bottom: ${rem('50px')};
    margin-top: ${rem('88px')};
    align-items: center;    
`

const Login = ({error, loginAction, history}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const inputHandler = (e, func) => {
        func(e.currentTarget.value)
    };

    const loginHandler = async e => {
        e.preventDefault();
        const loginData = {email, password};
        const response = await loginAction(loginData);
        if (response.status === 200) {
            history.push('/');
        }
    };

    return (
        <UserAccessContentContainer>
            <UserAccessTitleWrapper titletext="Login"/>
            <LoginContent>
                <Input
                    placeholder='Email'
                    type='text'
                    value={email}
                    name='email'
                    onChange={e => inputHandler(e, setEmail)}
                />
                <Input
                    placeholder="Password"
                    type='password'
                    value={password}
                    name='password'
                    onChange={e => inputHandler(e, setPassword)}
                />
            {<Error errorMessage={error}/>}
            </LoginContent>
            <Button onClick={loginHandler}>Login</Button>
        </UserAccessContentContainer>
    )
};

const mapStateToProps = state => {
    return {
        error: state.loginReducer.error
    }
};

export default withRouter(connect(mapStateToProps, {loginAction})(Login))