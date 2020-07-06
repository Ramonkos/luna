import React from "react";
import {Link} from 'react-router-dom'

// import { HeaderContainer } from "./style.js";
// import { LinkButtonWrapper } from "./style.js";
import {SmallOrangeLeftButton} from "../../../src/style/GlobalButton"
import {SmallOrangeRightButton} from "../../../src/style/GlobalButton"
import styled from "styled-components";
import {rem} from "polished";

//TODO: choose H1 font and add .active link
export const HeaderContainer = styled.div`
  border: solid 1px white;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  h1 {
    padding-left: 30px;
    font-family: 'Merienda One', cursive, Arial, serif;;
    font-size: ${rem('36px')};
    color: #000;
  }
`;


//TODO: active Links
export const LinkButtonWrapper = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 30px;
  a {
    padding-right: 70px;
    font-size: ${rem('20px')};
    line-height: ${rem('23px')};
    color: #4A4A4A;
  }
`;

//TODO: change a to link
const Header = ({children}) => {
    return <>
        <HeaderContainer>
            <h1>Luna</h1>
            <LinkButtonWrapper>
                {/* <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
        <Link to="/profile">Profile</Link> */}
                {/* <Link to="#">Home</Link>
        <Link to="#">Search</Link>
        <Link to="#">Profile</Link> */}
                <ul>
                    <li>
                        <a>Home</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a>Search</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a>Profile</a>
                    </li>
                </ul>
                <SmallOrangeLeftButton>SignUp</SmallOrangeLeftButton>
                <SmallOrangeRightButton>Login</SmallOrangeRightButton>
            </LinkButtonWrapper>
        </HeaderContainer>
            {children}
            </>
}

export default Header;